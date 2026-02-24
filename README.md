# 🖼️ Opera GX Style PiP (Picture-in-Picture)

Uma extensão leve e elegante para navegadores baseados em Chromium (Brave, Chrome, Edge) que adiciona um botão flutuante de Picture-in-Picture sobre os vídeos, inspirado no design e comportamento do Opera GX.

## ✨ Funcionalidades

* **Injeção Automática:** Detecta vídeos (`<video>`) dinamicamente em qualquer página.
* **Design Fiel:** Botão translúcido com efeito de desfoque (backdrop-filter) e animação suave de hover.
* **Posicionamento Inteligente:** O botão aparece centralizado na parte superior do vídeo apenas quando o mouse está sobre ele.
* **Zero Dependências:** Feito com Vanilla JavaScript e CSS puro, utilizando a API nativa de Picture-in-Picture do navegador.

## 🚀 Como instalar (Modo Desenvolvedor)

Como esta extensão ainda não está na Web Store, você pode instalá-la localmente:

1. Baixe este repositório como um arquivo `.zip` e extraia-o, ou clone via Git:
   \`git clone https://github.com/SEU-USUARIO/brave-pip-gx.git\`
2. Abra o seu navegador (Brave/Chrome) e digite na barra de endereços: \`brave://extensions/\` (ou \`chrome://extensions/\`).
3. No canto superior direito, ative a opção **Modo do desenvolvedor** (Developer mode).
4. Clique no botão **Carregar sem compactação** (Load unpacked) no canto superior esquerdo.
5. Selecione a pasta onde você extraiu/clonou os arquivos.
6. Pronto! Abra um site como YouTube ou Twitch e passe o mouse sobre o vídeo.

## 🛠️ Tecnologias Utilizadas

* **Manifest V3** - Padrão atualizado de extensões do Chrome.
* **JavaScript (ES6)** - Manipulação de DOM e eventos.
* **CSS3** - Estilização e animações.
* **HTML5 Picture-in-Picture API** - Controle nativo do vídeo.

---
Desenvolvido por **Wanii Tatsuo**.
