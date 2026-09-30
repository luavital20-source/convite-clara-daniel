// Vercel Function: cria um link de pagamento no Checkout da InfinitePay
// (cartão em até 12x ou Pix) para o presente escolhido no convite.
const HANDLE = 'maria-clara-silva-864';   // InfiniteTag, sem o "$"

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  const nome = String((body && body.nome) || '').trim().slice(0, 100);
  const valor = Number(body && body.valor);
  if (!nome || !(valor >= 1 && valor <= 50000)) return res.status(400).json({ error: 'Presente inválido' });

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const origin = 'https://' + host;

  try {
    const r = await fetch('https://api.infinitepay.io/invoices/public/checkout/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        handle: HANDLE,
        order_nsu: 'presente-' + Date.now(),
        redirect_url: origin + '/?presente=obrigado',
        items: [{ description: 'Presente: ' + nome, quantity: 1, price: Math.round(valor * 100) }],
      }),
    });
    const data = await r.json().catch(() => ({}));
    const url = data.url || data.payment_url;
    if (!r.ok || !url) return res.status(502).json({ error: data.error || data.message || 'Falha ao gerar o pagamento' });
    return res.status(200).json({ url });
  } catch (e) {
    return res.status(502).json({ error: 'Falha de conexão com a InfinitePay' });
  }
};
