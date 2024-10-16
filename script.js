// Variáveis globais para armazenar as palavras e o índice atual
let words = [];
let values = [];
let currentIndex = 0;

const jsonData = `{
    "Gestion de projets": ["Gestão de projetos", "La gestion de projets est essentielle pour respecter les délais et les budgets.", "A gestão de projetos é essencial para respeitar os prazos e os orçamentos."],
    "Économie de l'ingénierie": ["Economia da engenharia", "L'économie de l'ingénierie analyse les coûts et les bénéfices des projets techniques.", "A economia da engenharia analisa os custos e os benefícios dos projetos técnicos."],
    "Entrepreneuriat": ["Empreendedorismo", "L'entrepreneuriat est le processus de création et de gestion de nouvelles entreprises.", "O empreendedorismo é o processo de criação e gestão de novas empresas."],
    "Innovation": ["Inovação", "L'innovation est cruciale pour rester compétitif sur le marché.", "A inovação é crucial para manter-se competitivo no mercado."],
    "Gestion de la qualité": ["Gestão da qualidade", "La gestion de la qualité assure que les produits répondent aux normes établies.", "A gestão da qualidade garante que os produtos atendam aos padrões estabelecidos."],
    "Analyse SWOT": ["Análise SWOT", "L'analyse SWOT permet d'évaluer les forces, faiblesses, opportunités et menaces.", "A análise SWOT permite avaliar as forças, fraquezas, oportunidades e ameaças."],
    "Bilan": ["Balanço", "Le bilan financier donne une vue d'ensemble des actifs et des passifs de l'entreprise.", "O balanço financeiro fornece uma visão geral dos ativos e passivos da empresa."],
    "Budget prévisionnel": ["Orçamento previsional", "Le budget prévisionnel est utilisé pour planifier les dépenses futures.", "O orçamento previsional é usado para planejar as despesas futuras."],
    "Cash flow": ["Fluxo de caixa", "Un bon cash flow est crucial pour la survie de l'entreprise.", "Um bom fluxo de caixa é crucial para a sobrevivência da empresa."],
    "Capital risque": ["Capital de risco", "Le capital risque investit dans des startups à fort potentiel.", "O capital de risco investe em startups com alto potencial."],
    "Objectifs SMART": ["Objetivos SMART", "Les objectifs SMART sont spécifiques, mesurables, atteignables, réalistes et temporels.", "Os objetivos SMART são específicos, mensuráveis, alcançáveis, realistas e temporais."],
    "Leadership": ["Liderança", "Le leadership est essentiel pour guider une équipe vers l'atteinte des objectifs.", "A liderança é essencial para guiar uma equipe na conquista dos objetivos."],
    "Marketing stratégique": ["Marketing estratégico", "Le marketing stratégique détermine comment atteindre les objectifs de marché.", "O marketing estratégico determina como alcançar os objetivos de mercado."],
    "Plan d'affaires": ["Plano de negócios", "Le plan d'affaires est un document qui décrit la stratégie de l'entreprise.", "O plano de negócios é um documento que descreve a estratégia da empresa."],
    "Retour sur investissement (ROI)": ["Retorno sobre investimento (ROI)", "Le ROI mesure la rentabilité d'un investissement.", "O ROI mede a rentabilidade de um investimento."],
    "Gestion des risques": ["Gestão de riscos", "La gestion des risques identifie et minimise les menaces pour l'entreprise.", "A gestão de riscos identifica e minimiza as ameaças para a empresa."],
    "Analyse financière": ["Análise financeira", "L'analyse financière évalue la santé économique d'une entreprise.", "A análise financeira avalia a saúde econômica de uma empresa."],
    "Système d'information": ["Sistema de informação", "Le système d'information collecte et traite les données de l'entreprise.", "O sistema de informação coleta e processa os dados da empresa."],
    "Développement durable": ["Desenvolvimento sustentável", "Le développement durable vise à minimiser l'impact environnemental des activités économiques.", "O desenvolvimento sustentável visa minimizar o impacto ambiental das atividades econômicas."],
    "Marché cible": ["Mercado-alvo", "Définir le marché cible est crucial pour une stratégie marketing efficace.", "Definir o mercado-alvo é crucial para uma estratégia de marketing eficaz."],
    "Évaluation de performance": ["Avaliação de desempenho", "L'évaluation de performance mesure l'efficacité des employés.", "A avaliação de desempenho mede a eficácia dos funcionários."],
    "Réseau d'affaires": ["Rede de negócios", "Un bon réseau d'affaires peut ouvrir des opportunités professionnelles.", "Uma boa rede de negócios pode abrir oportunidades profissionais."]
}`;

// Fonction permettant de déplacer le logo vers le haut et de lancer des mots aléatoires
function animateLogo() {
    const logoContainer = document.getElementById('logo-container');
    const logoImage = document.getElementById('logo');
    
    // Animation pour déplacer le logo vers le haut et réduire sa taille
    logoContainer.style.height = '5%'; 
    logoContainer.style.transition = 'all 2s ease-in-out';
    logoImage.style.width = '250px'; 
    logoImage.style.transition = 'all 2s ease-in-out'

    // Modifie l'image du logo après qu'il ait été déplacé
    setTimeout(function(){
        logoImage.src = './Assets/FlashFac (1).png';
    }, 2000);
    
    // Après l'animation du logo, lancer les mots aléatoires
    setTimeout(displayRandomWords, 1500);
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

                setTimeout(function(){
                    // Muda a opacidade para 1 (visível)
                    wordDiv.style.opacity = '1';

                    // Depois de 2 segundos, volta a opacidade para 0 (invisível)
                    setTimeout(function(){
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
    btn_pt.addEventListener('mouseover', function(){
        btn_pt.textContent = 'Je suis lusophone et je vais étudier dans une université francophone'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt.addEventListener('mouseout', function(){
        btn_pt.textContent = 'Eu falo a língua portuguesa e vou estudar em uma universidade de língua francesa'; // Texto original quando o mouse sai
    });
    
    // btn_fr
    btn_fr.addEventListener('mouseover', function(){
        btn_fr.textContent = 'Eu falo a língua francesa e vou estudar em uma universidade de língua portuguesa.'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr.addEventListener('mouseout', function(){
        btn_fr.textContent = 'Je suis francophone et je vais étudier dans une université lusophone'; // Texto original quando o mouse sai
    });

    // btn_pt_manag_eco
    btn_pt_manag_eco.addEventListener('mouseover', function(){
        btn_pt_manag_eco.textContent = 'Gestão e Economia'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_manag_eco.addEventListener('mouseout', function(){
        btn_pt_manag_eco.textContent = 'Management et Économie'; // Texto original quando o mouse sai
    });

    // btn_fr_manag_eco
    btn_fr_manag_eco.addEventListener('mouseover', function(){
        btn_fr_manag_eco.textContent = 'Management et Économie'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_manag_eco.addEventListener('mouseout', function(){
        btn_fr_manag_eco.textContent = 'Gestão e Economia'; // Texto original quando o mouse sai
    });

    // btn_pt_physics
    btn_pt_physics.addEventListener('mouseover', function(){
        btn_pt_physics.textContent = 'Física'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_physics.addEventListener('mouseout', function(){
        btn_pt_physics.textContent = 'Physique'; // Texto original quando o mouse sai
    });

    // btn_fr_physics
    btn_fr_physics.addEventListener('mouseover', function(){
        btn_fr_physics.textContent = 'Physique'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_physics.addEventListener('mouseout', function(){
        btn_fr_physics.textContent = 'Física'; // Texto original quando o mouse sai
    });

    // btn_pt_programming
    btn_pt_programming.addEventListener('mouseover', function(){
        btn_pt_programming.textContent = 'Informática'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_programming.addEventListener('mouseout', function(){
        btn_pt_programming.textContent = 'Informatique'; // Texto original quando o mouse sai
    });

    // btn_fr_programming
    btn_fr_programming.addEventListener('mouseover', function(){
        btn_fr_programming.textContent = 'Informatique'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_programming.addEventListener('mouseout', function(){
        btn_fr_programming.textContent = 'Informática'; // Texto original quando o mouse sai
    });

    // btn_pt_sust_ethics
    btn_pt_sust_ethics.addEventListener('mouseover', function(){
        btn_pt_sust_ethics.textContent = 'Sustentabilidade e Ética'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_pt_sust_ethics.addEventListener('mouseout', function(){
        btn_pt_sust_ethics.textContent = 'Développement Durable et Éthique'; // Texto original quando o mouse sai
    });

    // btn_fr_sust_ethics
    btn_fr_sust_ethics.addEventListener('mouseover', function(){
        btn_fr_sust_ethics.textContent = 'Développement Durable et Éthique'; // Novo texto quando o mouse passa sobre o botão
    });
    btn_fr_sust_ethics.addEventListener('mouseout', function(){
        btn_fr_sust_ethics.textContent = 'Sustentabilidade e Ética'; // Texto original quando o mouse sai
    });
}

function setupButtonAction() {
    const btn_pt = document.getElementById('btn_pt');
    const btn_fr = document.getElementById('btn_fr');
    const btn_home = document.getElementById('home-button');
    const back_to_menu = document.getElementById('back-to-menu');
    const btn_fr_manag_eco = document.getElementById('btn_fr_manag_eco');
    const btn_fr_physics = document.getElementById('btn_fr_physics');
    const btn_fr_programming = document.getElementById('btn_fr_programming');
    const btn_fr_sust_ethics = document.getElementById('btn_fr_sust_ethics');
    const btn_pt_manag_eco = document.getElementById('btn_pt_manag_eco');
    const btn_pt_physics = document.getElementById('btn_pt_physics');
    const btn_pt_programming = document.getElementById('btn_pt_programming');
    const btn_pt_sust_ethics = document.getElementById('btn_pt_sust_ethics');
    const example_btn_fr = document.getElementById('example-btn-fr');
    const example_btn_pt = document.getElementById('example-btn-pt');
    const left_arrow_fr = document.getElementById('left-arrow-fr')
    const right_arrow_fr = document.getElementById('right-arrow-fr')
    const left_arrow_pt = document.getElementById('left-arrow-pt')
    const right_arrow_pt = document.getElementById('right-arrow-pt')
    const flashcards_container_fr = document.getElementById('flashcards-container-fr')
    const flashcards_container_pt = document.getElementById('flashcards-container-pt')

    const LearnFrench_page = document.getElementById('LearnFrench-page')
    const LearnPortuguese_page = document.getElementById('LearnPortuguese-page')
    const buttons_container = document.getElementById('buttons-container')
    const words_sections = document.getElementById('words-sections')
    const FlashCardsFrench_page = document.getElementById('FlashCardsFrench-page')
    const FlashCardsPortuguese_page = document.getElementById('FlashCardsPortuguese-page')
    const flashcard_fr = document.getElementById('flashcard-fr')
    const flashcard_pt = document.getElementById('flashcard-pt')
    
    btn_pt.addEventListener('click', function(){
        LearnFrench_page.style.display = 'flex'; // faz aparecer a seção
        back_to_menu.style.display = 'flex'; // Mostra o botão de ir ao menu
        buttons_container.style.display = 'none'; // faz desaparecer a seção
        words_sections.style.display = 'none'; // faz desaparecer a seção
    });
    
    btn_fr.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'flex'; // faz aparecer a seção
        back_to_menu.style.display = 'flex'; // Mostra o botão de ir ao menu
        buttons_container.style.display = 'none'; // faz desaparecer a seção
        words_sections.style.display = 'none'; // faz desaparecer a seção
    });

    btn_home.addEventListener('click', function(){
        buttons_container.style.display = 'flex'; // faz desaparecer a seção
        back_to_menu.style.display = 'none'; // Mostra o botão de ir ao menu
        LearnFrench_page.style.display = 'none'; // faz aparecer a seção
        LearnPortuguese_page.style.display = 'none'; // faz aparecer a seção
        words_sections.style.display = 'none'; // faz desaparecer a seção
        FlashCardsFrench_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsPortuguese_page.style.display = 'none'; // faz desaparecer a seção
    });

    btn_fr_manag_eco.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsFrench_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataFr('management_economy.json');
    });

    btn_fr_physics.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsFrench_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataFr('physics.json');
    });

    btn_fr_programming.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsFrench_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataFrTESTE('programming.json');
    });

    btn_fr_sust_ethics.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsFrench_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataFrTESTE('sustainability_ethics.json');
    });

    btn_pt_manag_eco.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsPortuguese_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataPtTESTE('management_economy.json');
    });

    btn_pt_physics.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsPortuguese_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataPtTESTE('physics.json');
    });

    btn_pt_programming.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsPortuguese_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataPtTESTE('programming.json');
    });

    btn_pt_sust_ethics.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none'; // faz desaparecer a seção
        FlashCardsPortuguese_page.style.display = 'flex'; // faz aparecer a seção
        loadThemeDataPtTESTE('sustainability_ethics.json');
    });

    left_arrow_fr.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            flashcard_fr.classList.remove('flipped')
            updateWordFr();
        }
    });

    right_arrow_fr.addEventListener('click', function() {
        if (currentIndex < words.length - 1) {
            currentIndex++;
            flashcard_fr.classList.remove('flipped')
            updateWordFr();
        }
    });

    left_arrow_pt.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            flashcard_pt.classList.remove('flipped')
            updateWordPt();
        }
    });

    right_arrow_pt.addEventListener('click', function() {
        if (currentIndex < words.length - 1) {
            currentIndex++;
            flashcard_pt.classList.remove('flipped')
            updateWordPt();
        }
    });

    example_btn_fr.addEventListener('click', function() {
        const example_sentence = values[currentIndex][1];
        document.getElementById('example-sentence-fr').innerText = example_sentence;
        document.getElementById('example-sentence-fr').style.color = '#333'
    });

    example_btn_pt.addEventListener('click', function() {
        const example_sentence = values[currentIndex][2];
        document.getElementById('example-sentence-pt').innerText = example_sentence;
        document.getElementById('example-sentence-pt').style.color = '#333'
    });

    flashcards_container_fr.addEventListener('click', function() {
        flashcard_fr.classList.toggle('flipped'); // Alterna a classe que controla a rotação
        document.getElementById("word-front-fr").textContent = words[currentIndex];
        document.getElementById("word-back-fr").textContent = values[currentIndex][0];
    });

    flashcards_container_pt.addEventListener('click', function() {
        flashcard_pt.classList.toggle('flipped'); // Alterna a classe que controla a rotação
        document.getElementById("word-front-pt").textContent = values[currentIndex][0];
        document.getElementById("word-back-pt").textContent = words[currentIndex];
    });

}

// Função para carregar o JSON correspondente ao tema
function loadThemeDataFr(json_file) {
    words = [];
    values = [];
    currentIndex = 0;
    // Exemplo de requisição de arquivo JSON
    fetch(json_file) // Certifique-se de que o caminho para o JSON está correto
        .then(response => {
            return response.json();
        })
        .then(data => {
            words = Object.keys(response); // Pegando as chaves (palavras) do JSON
            values = Object.values(response);
            currentIndex = 0; 
            console.log(words); // Use os dados conforme necessário
            console.log(values);
            updateWordFr(); // Atualiza a tela com a primeira palavra
        });
}

function loadThemeDataFrTESTE() {
    themeData = JSON.parse(jsonData);
    words = Object.keys(themeData);
    values = Object.values(themeData);
    currentIndex = 0;
    console.log(words); // Use os dados conforme necessário
    console.log(values);
    updateWordFr();
}

// Função para atualizar o termo exibido
function updateWordFr() {
    document.getElementById('word-front-fr').innerText = words[currentIndex];
    document.getElementById('example-sentence-fr').style.color = '#ffffff'

}

function loadThemeDataPtTESTE() {
    themeData = JSON.parse(jsonData);
    words = Object.keys(themeData);
    values = Object.values(themeData);
    currentIndex = 0;
    console.log(words); // Use os dados conforme necessário
    console.log(values);
    updateWordPt();
}

// Função para atualizar o termo exibido
function updateWordPt() {
    document.getElementById('word-front-pt').innerText = values[currentIndex][0];
    document.getElementById('example-sentence-pt').style.color = '#ffffff'

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
