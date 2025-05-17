// index.js

// --- Variables Globales y del DOM ---
let allQuestions = []; // Almacenará todas las preguntas cargadas de los módulos
let currentQuestions = []; // Preguntas seleccionadas para la partida actual
let currentQuestionIndex = 0; // Índice de la pregunta actual
let score = { correct: 0, incorrect: 0 }; // Puntuación de la partida
let lastGameQuestionIds = []; // IDs de las preguntas de la última partida para evitar repetición inmediata

const QUESTIONS_PER_GAME = 25; // Número de preguntas por partida
const MIN_QUESTIONS_PER_UNIT = 3; // Mínimo de preguntas a seleccionar de cada unidad
const TOTAL_UNITS = 8; // Número total de unidades temáticas

// Elementos del DOM (se asignarán en assignDOMelements)
let startScreen, gameScreen, endScreen;
let startGameBtn, nextQuestionBtn, playAgainBtn;
let questionCounterEl, scoreCounterEl; // Renombrados para claridad
let questionTextEl, optionsContainer, explanationTextEl, errorMessageEl;

// --- Funciones de Inicialización y Carga ---

/**
 * Asigna las referencias a los elementos del DOM a las variables globales.
 */
function assignDOMelements() {
    startScreen = document.getElementById('start-screen');
    gameScreen = document.getElementById('game-screen');
    endScreen = document.getElementById('end-screen');
    
    startGameBtn = document.getElementById('start-game-btn');
    nextQuestionBtn = document.getElementById('next-question-btn');
    playAgainBtn = document.getElementById('play-again-btn');
    
    questionCounterEl = document.getElementById('question-counter');
    scoreCounterEl = document.getElementById('score-counter');
    
    questionTextEl = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');
    explanationTextEl = document.getElementById('explanation-text');
    errorMessageEl = document.getElementById('error-message');
    
    console.log("DOM elements assigned.");
}

/**
 * Carga dinámicamente las preguntas de todos los módulos de unidades.
 * @returns {Promise<boolean>} True si las preguntas se cargaron y procesaron, false en caso contrario.
 */
async function loadAllQuestions() {
    console.log("Attempting to load questions...");
    allQuestions = []; // Resetear antes de cargar
    try {
        // Importación dinámica de los módulos de preguntas
        // Se asume que los archivos unitX_questions.js exportan un array llamado 'unitXQuestions'
        for (let i = 1; i <= TOTAL_UNITS; i++) {
            const module = await import(`./unit${i}_questions.js`);
            const questions = module[`unit${i}Questions`]; // Acceso a la exportación nombrada
            if (questions && Array.isArray(questions)) {
                allQuestions = allQuestions.concat(questions);
                console.log(`Loaded ${questions.length} questions from unit ${i}.`);
            } else {
                console.warn(`No questions found or incorrect format for unit ${i}.`);
            }
        }

        console.log(`Total questions loaded: ${allQuestions.length}`);
        if (allQuestions.length === 0) {
            showError("No se pudieron cargar las preguntas. Por favor, revisa los archivos de preguntas.");
            return false;
        }
        // Validar estructura de algunas preguntas como muestra
        if (allQuestions.length > 0 && !isValidQuestionStructure(allQuestions[0])) {
            showError("La estructura de las preguntas no es válida. Revisa la consola.");
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error loading question modules:", error);
        showError("Error al cargar los archivos de preguntas. Revisa la consola para más detalles.");
        return false;
    }
}

/**
 * Valida la estructura de un objeto de pregunta.
 * @param {object} question - El objeto de pregunta a validar.
 * @returns {boolean} True si la estructura es válida, false en caso contrario.
 */
function isValidQuestionStructure(question) {
    return question &&
           typeof question.id === 'string' &&
           typeof question.unit === 'number' &&
           typeof question.questionText === 'string' &&
           Array.isArray(question.options) &&
           question.options.length === 4 &&
           question.options.every(opt => typeof opt === 'string') &&
           typeof question.correctAnswerIndex === 'number' &&
           question.correctAnswerIndex >= 0 && question.correctAnswerIndex < 4 &&
           typeof question.explanation === 'string';
}

/**
 * Verifica si hay suficientes preguntas disponibles para iniciar una partida.
 * @returns {boolean} True si hay suficientes preguntas, false en caso contrario.
 */
function checkQuestionAvailability() {
    if (!allQuestions || allQuestions.length === 0) {
        showError("El banco de preguntas está vacío.");
        return false;
    }
    if (allQuestions.length < QUESTIONS_PER_GAME) {
        showError(`No hay suficientes preguntas en total. Se necesitan ${QUESTIONS_PER_GAME} y hay ${allQuestions.length}.`);
        return false;
    }

    const questionsByUnit = {};
    for (let i = 1; i <= TOTAL_UNITS; i++) {
        questionsByUnit[i] = allQuestions.filter(q => q.unit === i);
        if (questionsByUnit[i].length < MIN_QUESTIONS_PER_UNIT) {
            showError(`La unidad ${i} no tiene suficientes preguntas. Se necesitan ${MIN_QUESTIONS_PER_UNIT} y tiene ${questionsByUnit[i].length}.`);
            return false;
        }
    }
    errorMessageEl.textContent = ''; // Limpiar errores previos si todo está bien
    return true;
}

// --- Lógica de Selección de Preguntas ---

/**
 * Selecciona las preguntas para la partida actual, cumpliendo los criterios de representación y evitando repeticiones.
 */
function selectGameQuestions() {
    console.log("Selecting game questions. Last game IDs:", lastGameQuestionIds);
    let selectedQuestions = [];
    let availablePool = [...allQuestions]; // Copia del banco global para trabajar

    const questionsGroupedByUnit = {};
    for (let i = 1; i <= TOTAL_UNITS; i++) {
        questionsGroupedByUnit[i] = availablePool.filter(q => q.unit === i);
    }

    // 1. Garantizar representación mínima por unidad
    for (let unitNum = 1; unitNum <= TOTAL_UNITS; unitNum++) {
        let unitQuestions = questionsGroupedByUnit[unitNum] ? [...questionsGroupedByUnit[unitNum]] : [];
        
        for (let i = 0; i < MIN_QUESTIONS_PER_UNIT; i++) {
            // Intentar seleccionar preguntas no jugadas recientemente de esta unidad
            let candidates = unitQuestions.filter(q => !lastGameQuestionIds.includes(q.id) && !selectedQuestions.some(sq => sq.id === q.id));
            
            if (candidates.length === 0) { // Si no hay "nuevas" para esta unidad, permitir repetición de la misma unidad
                candidates = unitQuestions.filter(q => !selectedQuestions.some(sq => sq.id === q.id)); // Tomar de las restantes de la unidad
            }

            if (candidates.length === 0) { // Si aún así no hay (ej. menos de MIN_QUESTIONS_PER_UNIT en total para la unidad)
                console.warn(`Not enough unique questions in unit ${unitNum} to meet minimum ${MIN_QUESTIONS_PER_UNIT}.`);
                break; // Salir del bucle para esta unidad si no hay más candidatas
            }
            
            const randomIndex = Math.floor(Math.random() * candidates.length);
            const question = candidates.splice(randomIndex, 1)[0];
            selectedQuestions.push(question);

            // Remover de las listas originales para evitar ser seleccionada de nuevo en la fase de completado
            availablePool = availablePool.filter(q => q.id !== question.id);
            questionsGroupedByUnit[unitNum] = questionsGroupedByUnit[unitNum].filter(q => q.id !== question.id);
        }
    }
    
    console.log(`Questions after unit guarantee: ${selectedQuestions.length}`);

    // 2. Completar aleatoriamente hasta QUESTIONS_PER_GAME
    let remainingNeeded = QUESTIONS_PER_GAME - selectedQuestions.length;
    if (remainingNeeded > 0) {
        // Priorizar preguntas no seleccionadas y no en lastGameQuestionIds
        let preferredPool = availablePool.filter(q => !lastGameQuestionIds.includes(q.id) && !selectedQuestions.some(sq => sq.id === q.id));
        
        for (let i = 0; i < remainingNeeded && preferredPool.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * preferredPool.length);
            const question = preferredPool.splice(randomIndex, 1)[0];
            selectedQuestions.push(question);
            availablePool = availablePool.filter(q => q.id !== question.id);
        }

        // Si aún faltan, usar del resto de availablePool (que podría incluir de lastGameQuestionIds si no se usaron en la garantía)
        remainingNeeded = QUESTIONS_PER_GAME - selectedQuestions.length; // Recalcular
        if (remainingNeeded > 0) {
            let secondaryPool = availablePool.filter(q => !selectedQuestions.some(sq => sq.id === q.id));
            for (let i = 0; i < remainingNeeded && secondaryPool.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * secondaryPool.length);
                const question = secondaryPool.splice(randomIndex, 1)[0];
                selectedQuestions.push(question);
            }
        }
    }
    
    // 3. Mezcla Final
    // Asegurarse de que no haya duplicados (aunque la lógica anterior debería prevenirlo)
    const uniqueSelectedIds = new Set();
    currentQuestions = selectedQuestions.filter(q => {
        if (uniqueSelectedIds.has(q.id)) {
            return false;
        }
        uniqueSelectedIds.add(q.id);
        return true;
    });

    // Si después de la deduplicación tenemos menos de las necesarias, podríamos tener un problema.
    // Por ahora, mezclamos las que tenemos.
    currentQuestions.sort(() => Math.random() - 0.5);

    if (currentQuestions.length < QUESTIONS_PER_GAME && currentQuestions.length > 0) {
        console.warn(`Could only select ${currentQuestions.length} questions for the game. Playing with this amount.`);
    } else if (currentQuestions.length === 0 && allQuestions.length > 0) {
        // Esto sería un error grave en la lógica de selección si allQuestions no está vacío
        showError("Error crítico en la selección de preguntas. No se seleccionó ninguna.");
        return false; // Indicar fallo en la selección
    }
    
    console.log(`Final questions for game (${currentQuestions.length}):`, currentQuestions.map(q=>q.id));
    return true; // Indicar éxito en la selección
}

// --- Flujo del Juego ---

/**
 * Inicia una nueva partida.
 */
function startGame() {
    console.log("Starting game...");
    errorMessageEl.textContent = ''; // Limpiar mensajes de error
    if (!checkQuestionAvailability()) {
        console.error("Cannot start game due to insufficient questions.");
        startGameBtn.disabled = true; // Deshabilitar botón si no se puede jugar
        return;
    }
    startGameBtn.disabled = false; // Habilitar si estaba deshabilitado

    if (!selectGameQuestions() || currentQuestions.length === 0) {
        // selectGameQuestions ya debería mostrar un error si es crítico
        if (currentQuestions.length === 0) showError("No se pudieron seleccionar preguntas para iniciar la partida.");
        return;
    }
    
    currentQuestionIndex = 0;
    score = { correct: 0, incorrect: 0 };
    updateScoreDisplay();

    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    displayQuestion();
    console.log("Game started.");
}

/**
 * Muestra la pregunta actual y sus opciones.
 */
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    if (!question) {
        console.error("Error: La pregunta actual es indefinida.", currentQuestionIndex, currentQuestions);
        showError("Error al cargar la pregunta. Intenta de nuevo.");
        endGame(); // Terminar el juego si hay un problema con la pregunta
        return;
    }

    questionTextEl.textContent = question.questionText;
    optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    // Limpiar mensajes de feedback anteriores si existieran fuera de explanationTextEl
    const prevFeedback = gameScreen.querySelector('.temp-feedback');
    if (prevFeedback) prevFeedback.remove();

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        // Clases de Tailwind para estilo y responsividad
        button.className = 'option-button w-full bg-sky-500 hover:bg-sky-600 text-white p-3 sm:p-4 rounded-lg text-left transition-colors duration-150 border-2 border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300';
        button.dataset.index = index;
        button.addEventListener('click', handleAnswer);
        optionsContainer.appendChild(button);
    });

    explanationTextEl.classList.add('hidden');
    explanationTextEl.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    updateQuestionCounter();
    console.log(`Displaying question ${currentQuestionIndex + 1} of ${currentQuestions.length}: ${question.id}`);
}

/**
 * Maneja la selección de una respuesta por parte del usuario.
 * @param {Event} event - El evento de clic en una opción.
 */
function handleAnswer(event) {
    const selectedOptionButton = event.target;
    const selectedAnswerIndex = parseInt(selectedOptionButton.dataset.index);
    const question = currentQuestions[currentQuestionIndex];

    // Deshabilitar todos los botones de opción
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        button.classList.remove('hover:bg-slate-500'); // Quitar hover para que no interfiera
    });

    // Limpiar mensajes de feedback anteriores
    const prevFeedback = gameScreen.querySelector('.temp-feedback');
    if (prevFeedback) prevFeedback.remove();

    let feedbackMessage = document.createElement('p');
    feedbackMessage.classList.add('temp-feedback', 'mb-2', 'font-semibold');


    if (selectedAnswerIndex === question.correctAnswerIndex) {
        score.correct++;
        selectedOptionButton.classList.add('correct-answer'); // Verde para la correcta seleccionada
        feedbackMessage.textContent = "¡Respuesta Correcta!";
        feedbackMessage.classList.add('text-green-400');
    } else {
        score.incorrect++;
        selectedOptionButton.classList.add('incorrect-answer-user'); // Rojo para la incorrecta seleccionada
        optionsContainer.children[question.correctAnswerIndex].classList.add('correct-answer'); // Verde para la que era correcta
        feedbackMessage.textContent = "Respuesta Incorrecta.";
        feedbackMessage.classList.add('text-red-400');
    }
    
    // Insertar el mensaje de feedback antes del texto de explicación
    explanationTextEl.parentNode.insertBefore(feedbackMessage, explanationTextEl);

    explanationTextEl.innerHTML = `<strong>Explicación:</strong> ${question.explanation}`;
    explanationTextEl.classList.remove('hidden');
    nextQuestionBtn.classList.remove('hidden');
    updateScoreDisplay();
    console.log(`Answered question ${currentQuestionIndex + 1}. Correct: ${selectedAnswerIndex === question.correctAnswerIndex}`);
}

/**
 * Avanza a la siguiente pregunta.
 */
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

/**
 * Finaliza la partida y muestra la pantalla de resultados.
 */
function endGame() {
    console.log("Game ended. Score:", score);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    
    document.getElementById('final-correct').textContent = score.correct;
    document.getElementById('final-incorrect').textContent = score.incorrect;

    // Actualizar lastGameQuestionIds con las preguntas de la partida recién terminada
    lastGameQuestionIds = currentQuestions.map(q => q.id);
    console.log("Updated lastGameQuestionIds for next game:", lastGameQuestionIds);
}

// --- Funciones de Actualización de UI ---

/**
 * Actualiza el contador de puntuación en la pantalla.
 */
function updateScoreDisplay() {
    scoreCounterEl.textContent = `Aciertos: ${score.correct} | Fallos: ${score.incorrect}`;
}

/**
 * Actualiza el contador de pregunta actual en la pantalla.
 */
function updateQuestionCounter() {
    questionCounterEl.textContent = `Pregunta ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
}

/**
 * Muestra un mensaje de error en la pantalla de inicio.
 * @param {string} message - El mensaje de error a mostrar.
 */
function showError(message) {
    console.error("Error displayed to user:", message);
    if (errorMessageEl) {
        errorMessageEl.textContent = message;
    }
    if (startGameBtn) { // Deshabilitar botón si hay error crítico
        startGameBtn.disabled = true;
    }
}

// --- Inicialización del Juego ---

/**
 * Función principal para inicializar el juego.
 */
async function initGame() {
    console.log("Initializing game...");
    assignDOMelements(); // Primero asignar elementos del DOM

    // Asignar event listeners
    if (startGameBtn) startGameBtn.addEventListener('click', startGame);
    if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', nextQuestion);
    if (playAgainBtn) playAgainBtn.addEventListener('click', startGame); // Jugar de nuevo reinicia el proceso

    const questionsLoaded = await loadAllQuestions();
    if (questionsLoaded) {
        if (checkQuestionAvailability()) {
            startGameBtn.disabled = false; // Habilitar si todo está OK
            console.log("Game ready to start.");
        } else {
            startGameBtn.disabled = true; // Mantener deshabilitado si no hay suficientes preguntas
            console.log("Game not ready. Insufficient questions.");
        }
    } else {
        startGameBtn.disabled = true; // Mantener deshabilitado si falla la carga
        console.log("Game not ready. Failed to load questions.");
    }
}

// Iniciar el juego cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initGame);

