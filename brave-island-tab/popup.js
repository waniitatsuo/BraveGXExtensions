document.addEventListener('DOMContentLoaded', async () => {
  const titleInput = document.getElementById('island-title');
  const colorBtns = document.querySelectorAll('.color-btn');
  const btnNewTab = document.getElementById('btn-new-tab');
  const btnClose = document.getElementById('btn-close');

  // Pega a aba atual
  let [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let groupId = currentTab.groupId;

  // Se a aba não está em um grupo, cria um novo grupo ("Ilha") automaticamente
  if (groupId === chrome.tabGroups.TAB_GROUP_ID_NONE) {
    groupId = await chrome.tabs.group({ tabIds: currentTab.id });
  }

  // Carrega as informações atuais do grupo para exibir no menu
  const group = await chrome.tabGroups.get(groupId);
  if (group.title) titleInput.value = group.title;
  
  // Marca a cor atual como ativa
  colorBtns.forEach(btn => {
    if (btn.dataset.color === group.color) {
      btn.classList.add('active');
    }
  });

  // Evento: Mudar título da ilha
  titleInput.addEventListener('input', (e) => {
    chrome.tabGroups.update(groupId, { title: e.target.value });
  });

  // Evento: Mudar cor da ilha
  colorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove 'active' de todos e adiciona no clicado
      colorBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const novaCor = e.target.dataset.color;
      chrome.tabGroups.update(groupId, { color: novaCor });
    });
  });

  // Evento: Adicionar nova aba à ilha
  btnNewTab.addEventListener('click', async () => {
    const newTab = await chrome.tabs.create({ active: true });
    await chrome.tabs.group({ groupId: groupId, tabIds: newTab.id });
    window.close(); // Fecha o menuzinho
  });

  // Evento: Fechar toda a ilha (fecha todas as abas que estão nela)
  btnClose.addEventListener('click', async () => {
    // Pega todas as abas que pertencem a este grupo
    const tabsInGroup = await chrome.tabs.query({ groupId: groupId });
    const tabIds = tabsInGroup.map(t => t.id);
    await chrome.tabs.remove(tabIds);
    window.close();
  });
});