// Escuta toda vez que um novo grupo de abas for criado no Brave
chrome.tabGroups.onCreated.addListener((group) => {
    
    // O Brave por padrão cria grupos sem título e com cor cinza.
    // Se o grupo foi criado e não tem título, nós assumimos o controle:
    if (!group.title) {
        chrome.tabGroups.update(group.id, {
            title: "Nova Ilha 🏝️", // Nome padrão quando você criar nativamente
            color: "purple"       // Cor roxa padrão estilo GX
        });
    }
});