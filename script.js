// Função para mover a logo para o topo e iniciar as palavras aleatórias
function animateLogo() {
    const logoContainer = document.getElementById('logo-container');
    const logoImage = document.getElementById('logo');
    
    // Animação para mover a logo para o topo e reduzir o tamanho
    logoContainer.style.height = '5%';  // Muda o tamanho do container para mover a logo para o topo
    logoContainer.style.transition = 'all 2s ease-in-out';
    logoImage.style.width = '250px';  // Reduz o tamanho da logo
    logoImage.style.transition = 'all 2s ease-in-out'

    // Troca a imagem da logo após ela se mover e reduzir de tamanho
    setTimeout(() => {
        logoImage.src = './Assets/FlashFac (1).png'; // Troca para a nova imagem
    }, 2000); // Tempo para trocar a imagem após a logo reduzir
    
    // Após a animação da logo, iniciar as palavras aleatórias
    setTimeout(displayRandomWords, 1500); // espera 1s para iniciar as palavras
}

// Função para exibir palavras aleatoriamente em dois containers
function displayRandomWords() {
    const salutContainer = document.getElementById('salut-container');
    const olaContainer = document.getElementById('ola-container');

    // Função que cria palavras aleatórias em um container específico
    function createRandomWords(container, word) {
        const amountWords = 15; // Number of words to appear
        const delayInterval = 100; // Intervalo de 0.1 segundos entre o início da exibição das palavras
        const displayDuration = 1000; // Duração da exibição das palavras

        for (let i = 0; i < amountWords; i++) { // Cria 15 palavras
            const wordDiv = document.createElement('div');
            wordDiv.classList.add('random-word-' + word);
            wordDiv.textContent = word;

            // Posiciona aleatoriamente dentro do container
            wordDiv.style.position = 'absolute';
            wordDiv.style.left = `${Math.random() * 90}%`;
            wordDiv.style.top = `${Math.random() * 90}%`;

            // Define opacidade inicial como 0 (invisível)
            wordDiv.style.opacity = '0';
            wordDiv.style.transition = 'opacity 1s'; // Transição suave para a opacidade

            container.appendChild(wordDiv);

            // A função `setTimeout` vai alterar a opacidade após um tempo
            (function (wordDiv, index) {
                // Calcula o atraso total para essa palavra
                const startDelay = index * delayInterval;

                setTimeout(() => {
                    // Muda a opacidade para 1 (visível)
                    wordDiv.style.opacity = '1';

                    // Depois de 2 segundos, volta a opacidade para 0 (invisível)
                    setTimeout(() => {
                        wordDiv.style.opacity = '0';
                    }, displayDuration); // 2 segundos de exibição

                }, startDelay); // Começa a aparecer após o atraso calculado
            })(wordDiv, i);
        }
    }

    // Criar palavras "Salut" no primeiro container
    createRandomWords(salutContainer, 'Salut');

    // Criar palavras "Olá" no segundo container
    createRandomWords(olaContainer, 'Olá');

    // Mostra os botões após os botões sumirem
    // Função para mostrar os botões
    function displayButtons(){
        const buttons = document.getElementById('buttons-container');
        document.getElementById('words-sections').style.dislpay = 'none'; // Torna o container de palavras invisível
        buttons.style.display = 'flex'; // Mostra os botões
    }
    //var delayButtons = (amountWords * delayInterval) + displayDuration;
    var delayButtons = 2500 
    setTimeout(displayButtons, delayButtons);
}



function setupButtonHoverEffects() {
    const btn_pt = document.getElementById('btn_pt');
    const btn_fr = document.getElementById('btn_fr');
    const btn_pt_manag_eco = document.getElementById('btn_pt_manag_eco');
    const btn_fr_manag_eco = document.getElementById('btn_fr_manag_eco');
    const btn_pt_physics = document.getElementById('btn_pt_physics');
    const btn_fr_physics = document.getElementById('btn_fr_physics');
    const btn_pt_programming = document.getElementById('btn_pt_programming');
    const btn_fr_programming = document.getElementById('btn_fr_programming');
    const btn_pt_sust_ethics = document.getElementById('btn_pt_sust_ethics');
    const btn_fr_sust_ethics = document.getElementById('btn_fr_sust_ethics');
    
    // btn_pt
    btn_pt.addEventListener('mouseover', () => {
        btn_pt.textContent = 'Je suis lusophone et je vais étudier dans une université francophone'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt.addEventListener('mouseout', () => {
        btn_pt.textContent = 'Eu falo a língua portuguesa e vou estudar em uma universidade de língua francesa'; // Texto original quando o mouse sai
    });
    
    // btn_fr
    btn_fr.addEventListener('mouseover', () => {
        btn_fr.textContent = 'Eu falo a língua francesa e vou estudar em uma universidade de língua portuguesa.'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr.addEventListener('mouseout', () => {
        btn_fr.textContent = 'Je suis francophone et je vais étudier dans une université lusophone'; // Texto original quando o mouse sai
    });

    // btn_pt_manag_eco
    btn_pt_manag_eco.addEventListener('mouseover', () => {
        btn_pt_manag_eco.textContent = 'Gestão e Economia'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_manag_eco.addEventListener('mouseout', () => {
        btn_pt_manag_eco.textContent = 'Management et Économie'; // Texto original quando o mouse sai
    });

    // btn_fr_manag_eco
    btn_fr_manag_eco.addEventListener('mouseover', () => {
        btn_fr_manag_eco.textContent = 'Management et Économie'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_manag_eco.addEventListener('mouseout', () => {
        btn_fr_manag_eco.textContent = 'Gestão e Economia'; // Texto original quando o mouse sai
    });

    // btn_pt_physics
    btn_pt_physics.addEventListener('mouseover', () => {
        btn_pt_physics.textContent = 'Física'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_physics.addEventListener('mouseout', () => {
        btn_pt_physics.textContent = 'Physique'; // Texto original quando o mouse sai
    });

    // btn_fr_physics
    btn_fr_physics.addEventListener('mouseover', () => {
        btn_fr_physics.textContent = 'Physique'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_physics.addEventListener('mouseout', () => {
        btn_fr_physics.textContent = 'Física'; // Texto original quando o mouse sai
    });

    // btn_pt_programming
    btn_pt_programming.addEventListener('mouseover', () => {
        btn_pt_programming.textContent = 'Informática'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_programming.addEventListener('mouseout', () => {
        btn_pt_programming.textContent = 'Informatique'; // Texto original quando o mouse sai
    });

    // btn_fr_programming
    btn_fr_programming.addEventListener('mouseover', () => {
        btn_fr_programming.textContent = 'Informatique'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_programming.addEventListener('mouseout', () => {
        btn_fr_programming.textContent = 'Informática'; // Texto original quando o mouse sai
    });

    // btn_pt_sust_ethics
    btn_pt_sust_ethics.addEventListener('mouseover', () => {
        btn_pt_sust_ethics.textContent = 'Sustentabilidade e Ética'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_sust_ethics.addEventListener('mouseout', () => {
        btn_pt_sust_ethics.textContent = 'Développement Durable et Éthique'; // Texto original quando o mouse sai
    });

    // btn_fr_sust_ethics
    btn_fr_sust_ethics.addEventListener('mouseover', () => {
        btn_fr_sust_ethics.textContent = 'Développement Durable et Éthique'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_sust_ethics.addEventListener('mouseout', () => {
        btn_fr_sust_ethics.textContent = 'Sustentabilidade e Ética'; // Texto original quando o mouse sai
    });
}


function setupButtonAction() {
    const btn_pt = document.getElementById('btn_pt');
    const btn_fr = document.getElementById('btn_fr');
    const btn_home = document.getElementById('home-button');
    const back_to_menu = document.getElementById('back-to-menu');
    const LearnFrench_page = document.getElementById('LearnFrench-page')
    const LearnPortuguese_page = document.getElementById('LearnPortuguese-page')
    const buttons_container = document.getElementById('buttons-container')
    const words_sections = document.getElementById('words-sections')
    
    btn_pt.addEventListener('click', () => {
        LearnFrench_page.style.display = 'flex'; // faz aparecer a seção
        back_to_menu.style.display = 'flex'; // Mostra o botão de ir ao menu
        buttons_container.style.display = 'none'; // faz desaparecer a seção
        words_sections.style.display = 'none'; // faz desaparecer a seção
    });
    
    btn_fr.addEventListener('click', () => {
        LearnPortuguese_page.style.display = 'flex'; // faz aparecer a seção
        back_to_menu.style.display = 'flex'; // Mostra o botão de ir ao menu
        buttons_container.style.display = 'none'; // faz desaparecer a seção
        words_sections.style.display = 'none'; // faz desaparecer a seção
    });

    btn_home.addEventListener('click', () => {
        buttons_container.style.display = 'flex'; // faz desaparecer a seção
        back_to_menu.style.display = 'none'; // Mostra o botão de ir ao menu
        LearnFrench_page.style.display = 'none'; // faz aparecer a seção
        LearnPortuguese_page.style.display = 'none'; // faz aparecer a seção
        back_to_menu.style.display = 'none'; // Mostra o botão de ir ao menu
        words_sections.style.display = 'none'; // faz desaparecer a seção
    });

}

// Função principal que será chamada quando a página carregar
function onPageLoad() {
    // Configuração da animação da logo
    setTimeout(animateLogo, 800);

    // Configuração dos efeitos de hover para os botões
    setupButtonHoverEffects();

    // Configuração das ações dos butões
    setupButtonAction();
}

// Iniciar a função de atraso quando a página for carregada
window.onload = onPageLoad;