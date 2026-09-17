document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. LÓGICA DO MENU MOBILE
       ========================================= */
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Verificamos se os elementos existem para evitar erros no console
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            
            mainNav.classList.toggle('open');
            
            // Altera o texto do botão dinamicamente para acessibilidade
            if(mainNav.classList.contains('open')) {
                menuToggle.innerText = '[ Fechar ]';
            } else {
                menuToggle.innerText = '[ Menu ]';
            }
        });
    }

    /* =========================================
       2. LÓGICA DA ALTERNÂNCIA DE TEMA (DARK/LIGHT)
       ========================================= */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verifica na memória do navegador se o usuário já escolheu o tema claro antes
    const currentTheme = localStorage.getItem('theme');

    // Função auxiliar para atualizar o ícone (texto) do botão
    const updateButtonIcon = () => {
        if (body.classList.contains('light-theme')) {
            themeToggleBtn.innerText = '[☾]'; // Se está claro, mostra a Lua para voltar ao escuro
        } else {
            themeToggleBtn.innerText = '[☼]'; // Se está escuro, mostra o Sol para ir para o claro
        }
    };

    // Se a preferência salva for 'light', adiciona a classe no body logo na inicialização
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
    }

    // Só adicionamos os eventos de tema se o botão existir na página
    if (themeToggleBtn) {
        // Atualiza o ícone do botão logo que a página carrega
        updateButtonIcon();

        // Ouve o evento de clique no botão
        themeToggleBtn.addEventListener('click', () => {
            // Alterna (liga/desliga) a classe 'light-theme' no <body>
            body.classList.toggle('light-theme');
            
            // Salva a nova preferência do usuário no localStorage
            if (body.classList.contains('light-theme')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark'); 
            }
            
            // Atualiza visualmente o ícone do botão
            updateButtonIcon();
        });
    }
});