const pipBtn = document.createElement('div');
pipBtn.className = 'gx-pip-btn';
pipBtn.innerHTML = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <rect x="12" y="12" width="7" height="7"></rect>
    <line x1="21" y1="3" x2="12" y2="12"></line>
  </svg>
`;
document.body.appendChild(pipBtn);

let currentVideo = null;
let isHoveringButton = false;

pipBtn.addEventListener('mouseenter', () => { isHoveringButton = true; });
pipBtn.addEventListener('mouseleave', () => { isHoveringButton = false; });

// Monitora o movimento do mouse na página
document.addEventListener('mousemove', (e) => {
    // Se o mouse estiver sobre uma tag de vídeo
    if (e.target.tagName === 'VIDEO') {
        currentVideo = e.target;
        const rect = currentVideo.getBoundingClientRect();
        
        // CÁLCULO DA POSIÇÃO CENTRAL DO BOTÃO DE ATIVAR 
        const centerX = rect.left + window.scrollX + (rect.width / 2);
        const topY = rect.top + window.scrollY + 16;

        pipBtn.style.left = `${centerX}px`;
        pipBtn.style.top = `${topY}px`;
        
        // Mostra o botão
        pipBtn.style.opacity = '1';
        pipBtn.style.pointerEvents = 'auto';
    } 
    // Esconde o botão se o mouse sair do vídeo E não estiver sobre o próprio botão
    else if (!isHoveringButton) {
        pipBtn.style.opacity = '0';
        pipBtn.style.pointerEvents = 'none';
    }
});

// Lógica de ativação da API do Picture-in-Picture
pipBtn.addEventListener('click', async () => {
    if (!currentVideo) return;
    
    try {
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            await currentVideo.requestPictureInPicture();
        }
    } catch (error) {
        console.error("Erro ao tentar ativar o PiP:", error);
    }
});