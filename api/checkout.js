// Vercel Function: cria um link de pagamento no Checkout da InfinitePay
// (cartão em até 12x ou Pix) para o presente escolhido no convite.
const HANDLE = 'maria-clara-silva-864';   // InfiniteTag, sem o "$"
const ENDPOINTS = [
  'https://api.checkout.infinitepay.io/links',                        // documentação oficial
  'https://api.infinitepay.io/invoices/public/checkout/links',        // endpoint antigo
];

module.exports = async (req, res) => {
  if (req.method === 'GET') return res.status(200).json({ ok: true, handle: HANDLE });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  const nome = String((body && body.nome) || '').trim().slice(0, 100);
  const valor = Number(body && body.valor);
  if (!nome || !(valor >= 1 && valor <= 50000)) return res.status(400).json({ error: 'Presente inválido' });

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const payload = {
    handle: HANDLE,
    order_nsu: 'presente-' + Date.now(),
    redirect_url: 'https://' + host + '/?presente=obrigado',
    items: [{ quantity: 1, price: Math.round(valor * 100), description: 'Presente: ' + nome }],
  };

  const errors = [];
  for (const url of ENDPOINTS) {
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const raw = await r.text();
      let data = {};
      try { data = JSON.parse(raw); } catch (e) {}
      const link = data.url || data.link || data.payment_url;
      if (r.ok && link) return res.status(200).json({ url: link });
      errors.push(r.status + ': ' + raw.slice(0, 200));
      console.error('InfinitePay', url, r.status, raw);
    } catch (e) {
      errors.push('conexão: ' + e.message);
      console.error('InfinitePay', url, e);
    }
  }
  return res.status(502).json({ error: 'Falha ao gerar o pagamento', detalhes: errors });
};
