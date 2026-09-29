# Convite digital — Clara & Daniel

Convite de casamento (`index.html`) e lista de presentes (`presentes.html`), prontos para publicar no GitHub Pages / Vercel.

- **Data:** sexta-feira, 17 de setembro de 2027
- **Horário no convite:** 19h00 (a cerimônia começa às 19h30)
- **Local (cerimônia e recepção):** R. Dr. Rodrigo Codes Sandoval, 76 — Mondubim, Fortaleza — CE, 60711-455
- **Paleta:** branco, verde e champagne/dourado
- **Música:** YouTube `-hb2tecD13s` (toca ao tocar em "toque para abrir")
- **Versículo:** Salmos 37:5

## Como editar

Todos os textos e links ficam no bloco `CONFIG` no final do `index.html`:

| Campo | O que é |
|---|---|
| `horario` / `dataEvento` | horário exibido e alvo da contagem regressiva |
| `localNome` / `localEndereco` / `mapLocal` | local e link do Maps |
| `traje` | texto do dress code |
| `musicaYoutube` / `musicaArquivo` | ID do vídeo do YouTube, ou caminho de um `.mp3` (tem prioridade) |
| `listaPresentes` | link da lista (`presentes.html`) — vazio esconde a seção |
| `rsvpLink` ou `whatsapp` | confirmação de presença — vazio esconde a seção |

## Lista de presentes (`presentes.html`)

- Itens, valores e fotos ficam na lista `PRESENTES` no final do arquivo.
- Ao tocar em **Presentear**, o convidado recebe um Pix *copia e cola* (e QR Code) já com o valor do item.
  Preencha `pixChave` e `pixNome` no `CONFIG` — enquanto estiverem vazios, aparece um aviso de "em breve".
- `whatsapp` (opcional) mostra o botão para o convidado avisar os noivos do presente.
- A página é estática: não marca itens como "já presenteados".

## Arquivos

- `assets/noivos.jpg` — foto dos noivos (capa)
- `assets/local.jpg` — foto do local
- `assets/monograma.png` — monograma CD (máscara transparente, recolorida via CSS)
- `assets/presentes/` — fotos dos itens da lista
- `assets/js/qrcode.min.js` — gerador de QR Code (qrcodejs, MIT)
- `assets/papel.jpg`, `assets/eucalipto.webp`, `assets/folha.webp` — textura e folhagens decorativas
