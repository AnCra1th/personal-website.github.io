// Progressão Progressiva (Graceful Degradation):
// Se o usuário estiver usando Tor no modo "Safest", o JS não roda.
// O layout via CSS puro ainda permite a leitura, apenas o toggle mobile não funcionará,
// o que é um trade-off aceitável para segurança máxima em OPSEC.

document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Verificamos se os elementos existem antes de adicionar o evento,
    // evitando erros no console caso alguma página não tenha o menu.
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            
            mainNav.classList.toggle('open');
            
            // Altera o texto do botão dinamicamente para melhor acessibilidade
            if(mainNav.classList.contains('open')) {
                menuToggle.innerText = '[ Fechar ]';
            } else {
                menuToggle.innerText = '[ Menu ]';
            }
        });
    }
});