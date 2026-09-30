# Convite digital — Clara & Daniel

Convite de casamento com lista de presentes (`index.html`), pronto para publicar no GitHub Pages / Vercel.

- **Data:** sexta-feira, 17 de setembro de 2027
- **Horário no convite:** 19h00 (a cerimônia começa às 19h30)
- **Local (cerimônia e recepção):** R. Dr. Rodrigo Codes Sandoval, 76 — Mondubim, Fortaleza — CE, 60711-455
- **Paleta:** branco, verde e champagne/dourado
- **Música:** YouTube `-hb2tecD13s`, a partir de 0:21 (entrada do piano). Carrega sem som e liga o som no toque em "toque para abrir"; ao terminar, volta para 0:21
- **Versículo:** Salmos 37:5

## Como editar

Todos os textos e links ficam no bloco `CONFIG` no final do `index.html`:

| Campo | O que é |
|---|---|
| `horario` / `dataEvento` | horário exibido e alvo da contagem regressiva |
| `localNome` / `localEndereco` / `mapLocal` | local e link do Maps |
| `traje` | texto do dress code |
| `musicaYoutube` / `musicaInicio` / `musicaArquivo` | ID do vídeo, segundo em que a música começa, ou caminho de um `.mp3` (tem prioridade) |
| `infinitePay` | presentes pagos pelo Checkout da InfinitePay (cartão até 12x ou Pix) |
| `pixChave` / `pixNome` / `pixCidade` | Pix direto opcional, mostrado como alternativa |
| `whatsapp` | recebe as confirmações de presença e os recados de presente |

## Lista de presentes

- Fica dentro do próprio convite (seção "Lista de presentes"); `presentes.html` é só um atalho
  que abre o convite já nessa seção.
- Itens, valores e fotos ficam na lista `PRESENTES`, logo abaixo do `CONFIG`.
- Ao tocar em **Presentear agora**, o convite chama `api/checkout.js` (Vercel Function), que cria um
  link no Checkout da InfinitePay (InfiniteTag `maria-clara-silva-864`) com o valor do item e redireciona
  o convidado. Depois do pagamento ele volta ao convite (`?presente=obrigado`) e vê um agradecimento.
- Como alternativa, aparece o Pix direto (`maria.claraz2605@gmail.com`): código copia e cola com o valor, QR Code e botão para copiar a chave.
- `whatsapp` (opcional) mostra o botão para o convidado avisar os noivos do presente.
- A página é estática: não marca itens como "já presenteados".

## Confirmação de presença (RSVP)

- A lista `CONVIDADOS` fica logo abaixo de `PRESENTES`. O convidado digita o nome (acentos e
  maiúsculas não importam; só o primeiro nome basta se for único na lista).
- Depois de confirmar, o botão **Avisar os noivos** abre o WhatsApp (+55 85 98802-4068) com a mensagem e o nome do convidado.

## Arquivos

- `api/checkout.js` — cria o link de pagamento na InfinitePay
- `assets/noivos.jpg` — foto dos noivos (capa)
- `assets/local.jpg` — foto do local
- `assets/monograma.png` — monograma CD (máscara transparente, recolorida via CSS)
- `assets/presentes/` — fotos dos itens da lista
- `assets/js/qrcode.min.js` — gerador de QR Code (qrcodejs, MIT)
- `assets/papel.jpg`, `assets/eucalipto.webp`, `assets/folha.webp` — textura e folhagens decorativas
