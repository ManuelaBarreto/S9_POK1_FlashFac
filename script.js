// Variables globales pour stocker les mots et l'index actuel
let words = [];
let values = [];
let currentIndex = 0;

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

// Fonction pour afficher des mots aléatoires dans deux conteneurs
function displayRandomWords() {
    const salutContainer = document.getElementById('salut-container');
    const olaContainer = document.getElementById('ola-container');

    // Fonction qui crée des mots aléatoires dans un conteneur spécifique
    function createRandomWords(container, word) {
        const amountWords = 15; // Nombre de mots à afficher
        const delayInterval = 100;
        const displayDuration = 1000;

        for (let i = 0; i < amountWords; i++) {
            const wordDiv = document.createElement('div');
            wordDiv.classList.add('random-word-' + word);
            wordDiv.textContent = word;

            // Positionne aléatoirement dans le conteneur
            wordDiv.style.position = 'absolute';
            wordDiv.style.left = `${Math.random() * 90}%`;
            wordDiv.style.top = `${Math.random() * 90}%`;

            // Définit l'opacité initiale comme 0 (invisible)
            wordDiv.style.opacity = '0';
            wordDiv.style.transition = 'opacity 1s';

            container.appendChild(wordDiv);

            // A l'aide de `setTimeout`, change l'opacité après un certain temps
            (function (wordDiv, index) {
                const startDelay = index * delayInterval;

                setTimeout(function(){
                    wordDiv.style.opacity = '1';

                    setTimeout(function(){
                        wordDiv.style.opacity = '0';
                    }, displayDuration); //

                }, startDelay);
            })(wordDiv, i);
        }
    }

    // Créer des mots "Salut" dans le premier conteneur
    createRandomWords(salutContainer, 'Salut');

    // Créer des mots "Olá" dans le deuxième conteneur
    createRandomWords(olaContainer, 'Olá');

    // Afficher les boutons après que les mots aient disparu
    function displayButtons(){
        const buttons = document.getElementById('buttons-container');
        document.getElementById('words-sections').style.dislpay = 'none'; // Rend le conteneur de mots invisible
        buttons.style.display = 'flex'; // Affiche les boutons
    }
    var delayButtons = 2500 
    setTimeout(displayButtons, delayButtons);
}


// Configurer les actions de Hover de chaque bouton (Modifier la langue)
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
        btn_pt.textContent = 'Je suis lusophone et je vais étudier dans une université francophone';
    });
    btn_pt.addEventListener('mouseout', function(){
        btn_pt.textContent = 'Eu falo a língua portuguesa e vou estudar em uma universidade de língua francesa';
    });
    
    // btn_fr
    btn_fr.addEventListener('mouseover', function(){
        btn_fr.textContent = 'Eu falo a língua francesa e vou estudar em uma universidade de língua portuguesa.';
    });
    btn_fr.addEventListener('mouseout', function(){
        btn_fr.textContent = 'Je suis francophone et je vais étudier dans une université lusophone';
    });

    // btn_pt_manag_eco
    btn_pt_manag_eco.addEventListener('mouseover', function(){
        btn_pt_manag_eco.textContent = 'Gestão e Economia';
    });
    btn_pt_manag_eco.addEventListener('mouseout', function(){
        btn_pt_manag_eco.textContent = 'Management et Économie';
    });

    // btn_fr_manag_eco
    btn_fr_manag_eco.addEventListener('mouseover', function(){
        btn_fr_manag_eco.textContent = 'Management et Économie';
    });
    btn_fr_manag_eco.addEventListener('mouseout', function(){
        btn_fr_manag_eco.textContent = 'Gestão e Economia';
    });

    // btn_pt_physics
    btn_pt_physics.addEventListener('mouseover', function(){
        btn_pt_physics.textContent = 'Física';
    });
    btn_pt_physics.addEventListener('mouseout', function(){
        btn_pt_physics.textContent = 'Physique';
    });

    // btn_fr_physics
    btn_fr_physics.addEventListener('mouseover', function(){
        btn_fr_physics.textContent = 'Physique';
    });
    btn_fr_physics.addEventListener('mouseout', function(){
        btn_fr_physics.textContent = 'Física';
    });

    // btn_pt_programming
    btn_pt_programming.addEventListener('mouseover', function(){
        btn_pt_programming.textContent = 'Informática';
    });
    btn_pt_programming.addEventListener('mouseout', function(){
        btn_pt_programming.textContent = 'Informatique';
    });

    // btn_fr_programming
    btn_fr_programming.addEventListener('mouseover', function(){
        btn_fr_programming.textContent = 'Informatique';
    });
    btn_fr_programming.addEventListener('mouseout', function(){
        btn_fr_programming.textContent = 'Informática';
    });

    // btn_pt_sust_ethics
    btn_pt_sust_ethics.addEventListener('mouseover', function(){
        btn_pt_sust_ethics.textContent = 'Sustentabilidade e Ética';
    });
    btn_pt_sust_ethics.addEventListener('mouseout', function(){
        btn_pt_sust_ethics.textContent = 'Développement Durable et Éthique';
    });

    // btn_fr_sust_ethics
    btn_fr_sust_ethics.addEventListener('mouseover', function(){
        btn_fr_sust_ethics.textContent = 'Développement Durable et Éthique';
    });
    btn_fr_sust_ethics.addEventListener('mouseout', function(){
        btn_fr_sust_ethics.textContent = 'Sustentabilidade e Ética';
    });
}

//Configurer les actions de chaque bouton
function setupButtonAction() {
    // Boutons
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

    // Containers
    const LearnFrench_page = document.getElementById('LearnFrench-page')
    const LearnPortuguese_page = document.getElementById('LearnPortuguese-page')
    const buttons_container = document.getElementById('buttons-container')
    const words_sections = document.getElementById('words-sections')
    const FlashCardsFrench_page = document.getElementById('FlashCardsFrench-page')
    const FlashCardsPortuguese_page = document.getElementById('FlashCardsPortuguese-page')
    const flashcard_fr = document.getElementById('flashcard-fr')
    const flashcard_pt = document.getElementById('flashcard-pt')
    
    //Boutons de la page inicial
    btn_pt.addEventListener('click', function(){
        LearnFrench_page.style.display = 'flex';
        back_to_menu.style.display = 'flex';
        buttons_container.style.display = 'none';
        words_sections.style.display = 'none';
    });
    
    btn_fr.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'flex';
        back_to_menu.style.display = 'flex';
        buttons_container.style.display = 'none';
        words_sections.style.display = 'none';
    });

    //Bouton HOME
    btn_home.addEventListener('click', function(){
        buttons_container.style.display = 'flex';
        back_to_menu.style.display = 'none';
        LearnFrench_page.style.display = 'none';
        LearnPortuguese_page.style.display = 'none';
        words_sections.style.display = 'none';
        FlashCardsFrench_page.style.display = 'none';
        FlashCardsPortuguese_page.style.display = 'none';
    });

    //Boutons de la page du choix du vocabulaire
    btn_fr_manag_eco.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none';
        FlashCardsFrench_page.style.display = 'flex';
        loadThemeDataFr('./management_economy.json');
    });

    btn_fr_physics.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none';
        FlashCardsFrench_page.style.display = 'flex';
        loadThemeDataFr('./physics.json');
    });

    btn_fr_programming.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none';
        FlashCardsFrench_page.style.display = 'flex';
        loadThemeDataFr('./programming.json');
    });

    btn_fr_sust_ethics.addEventListener('click', function(){
        LearnFrench_page.style.display = 'none';
        FlashCardsFrench_page.style.display = 'flex';
        loadThemeDataFr('./sustainability_ethics.json');
    });

    btn_pt_manag_eco.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none';
        FlashCardsPortuguese_page.style.display = 'flex';
        loadThemeDataPt('./management_economy.json');
    });

    btn_pt_physics.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none';
        FlashCardsPortuguese_page.style.display = 'flex';
        loadThemeDataPt('./physics.json');
    });

    btn_pt_programming.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none';
        FlashCardsPortuguese_page.style.display = 'flex';
        loadThemeDataPt('./programming.json');
    });

    btn_pt_sust_ethics.addEventListener('click', function(){
        LearnPortuguese_page.style.display = 'none';
        FlashCardsPortuguese_page.style.display = 'flex';
        loadThemeDataPt('./sustainability_ethics.json');
    });

    //Boutons de la page de Flashcards
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
        flashcard_fr.classList.toggle('flipped'); // Change la classe qui contrôle la rotation
        document.getElementById("word-front-fr").textContent = words[currentIndex];
        document.getElementById("word-back-fr").textContent = values[currentIndex][0];
    });

    flashcards_container_pt.addEventListener('click', function() {
        flashcard_pt.classList.toggle('flipped'); // Change la classe qui contrôle la rotation
        document.getElementById("word-front-pt").textContent = values[currentIndex][0];
        document.getElementById("word-back-pt").textContent = words[currentIndex];
    });

}

// Fonctions pour charger le JSON correspondant au thème
function loadThemeDataFr(json_file) {
    words = [];
    values = [];
    currentIndex = 0;
    fetch(json_file)
        .then(response => {
            return response.json();
        })
        .then(data => {
            words = Object.keys(data);
            values = Object.values(data);
            currentIndex = 0;
            updateWordFr(); // Actualise l'écran avec le premier mot
        });
}

function loadThemeDataPt(json_file) {
    words = [];
    values = [];
    currentIndex = 0;
    fetch(json_file)
        .then(response => {
            return response.json();
        })
        .then(data => {
            words = Object.keys(data);
            values = Object.values(data);
            currentIndex = 0;
            updateWordPt(); // Actualise l'écran avec le premier mot
        });
}

// Fonctions de mise à jour du mot affiché
function updateWordFr() {
    document.getElementById('word-front-fr').innerText = words[currentIndex];
    document.getElementById('example-sentence-fr').style.color = '#ffffff'

}

function updateWordPt() {
    document.getElementById('word-front-pt').innerText = values[currentIndex][0];
    document.getElementById('example-sentence-pt').style.color = '#ffffff'

}

// Fonction principale qui sera appelée au chargement de la page
function onPageLoad() {
    // Configuration de l'animation du logo
    setTimeout(animateLogo, 800);

    // Configuração dos efeitos de hover para os botões
    setupButtonHoverEffects();

    // Configuration des actions des boutons
    setupButtonAction();
}

// Lancer la fonction lorsque la page est chargée
window.onload = onPageLoad;
