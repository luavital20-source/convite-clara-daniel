# Convite digital — Clara & Daniel

Convite de casamento em página única (`index.html`), pronto para publicar no GitHub Pages / Vercel.

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
| `listaPresentes` | link da lista — vazio esconde a seção |
| `rsvpLink` ou `whatsapp` | confirmação de presença — vazio esconde a seção |

## Arquivos

- `assets/noivos.jpg` — foto dos noivos (capa)
- `assets/local.jpg` — foto do local
- `assets/monograma.png` — monograma CD (máscara transparente, recolorida via CSS)
- `assets/papel.jpg`, `assets/eucalipto.webp`, `assets/folha.webp` — textura e folhagens decorativas
