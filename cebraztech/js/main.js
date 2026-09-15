<script>
        // Progressão Progressiva (Graceful Degradation):
        // Se o usuário estiver usando Tor no modo "Safest", o JS não roda.
        // O layout via CSS puro ainda permite a leitura, apenas o toggle mobile não funcionará,
        // o que é um trade-off aceitável para segurança máxima.
        
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menu-toggle');
            const mainNav = document.getElementById('main-nav');

            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', () => {
                    mainNav.classList.toggle('open');
                    // Altera o texto do botão
                    if(mainNav.classList.contains('open')) {
                        menuToggle.innerText = '[ Fechar ]';
                    } else {
                        menuToggle.innerText = '[ Menu ]';
                    }
                });
            }
        });
    </script>
