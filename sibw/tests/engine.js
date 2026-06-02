let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // Para guardar lo que vas respondiendo

function initQuiz(cat, btn) {
    if (!window.database || !window.database[cat]) return;
    
    currentQuestions = window.database[cat];
    currentIndex = 0;
    userAnswers = {}; 
    
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('score-area').style.display = 'none';
    
    showQuestion();
}

function showQuestion() {
    const data = currentQuestions[currentIndex];
    document.getElementById('q-text').innerText = data.q;
    document.getElementById('progress-label').innerText = `Pregunta ${currentIndex + 1}/${currentQuestions.length}`;
    document.getElementById('feedback').innerText = "";
    
    const box = document.getElementById('options-box');
    box.innerHTML = "";

    data.options.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.innerText = opt;
        
        // Si ya habías respondido esta pregunta antes, mostrar si era correcta
        if (userAnswers[currentIndex] !== undefined) {
            b.classList.add('disabled');
            if (i === data.correct) b.classList.add('correct');
            if (i === userAnswers[currentIndex] && i !== data.correct) b.classList.add('incorrect');
        }

        b.onclick = () => validate(i, data.correct, b);
        box.appendChild(b);
    });

    // Control de botones de flecha
    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    document.getElementById('next-btn').innerText = (currentIndex === currentQuestions.length - 1) ? "Finalizar 🏁" : "Siguiente ➡️";
}
function validate(selected, correct, btn) {
    if (userAnswers[currentIndex] !== undefined) return; 

    userAnswers[currentIndex] = selected; 
    const allBtns = document.querySelectorAll('.option-btn');
    
    allBtns.forEach(b => b.classList.add('disabled'));

    if (selected === correct) {
        btn.classList.add('correct');
        document.getElementById('feedback').innerText = "¡Correcto! 🌟";
    } else {
        btn.classList.add('incorrect');
        allBtns[correct].classList.add('correct');
        document.getElementById('feedback').innerText = "Incorrecto ❌";
    }

    // --- NUEVA LÓGICA DE SALTO AUTOMÁTICO ---
    // Esperamos 800ms para que el usuario vea el feedback y saltamos
    setTimeout(() => {
        // Si es la última pregunta, mostramos resultados
        if (currentIndex === currentQuestions.length - 1) {
            showResults();
        } else {
            // Si no, avanzamos a la siguiente
            changeQuestion(1);
        }
    }, 600); 
}

function changeQuestion(step) {
    if (step === 1 && currentIndex === currentQuestions.length - 1) {
        showResults();
        return;
    }
    
    currentIndex += step;
    showQuestion();
}

function showResults() {
    let score = 0;
    currentQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) score++;
    });

    document.getElementById('game-area').style.display = 'none';
    document.getElementById('score-area').style.display = 'block';
    document.getElementById('final-score').innerText = `${score} / ${currentQuestions.length}`;
}
// Escuchar teclas del ordenador
document.addEventListener('keydown', (event) => {
    // Si el quiz no está visible, no hacer nada
    if (document.getElementById('quiz-container').style.display !== 'block') return;
    // Si el área de resultados está visible, tampoco hacer nada
    if (document.getElementById('score-area').style.display === 'block') return;

    if (event.key === "ArrowRight") {
        // Flecha Derecha -> Siguiente
        changeQuestion(1);
    } else if (event.key === "ArrowLeft") {
        // Flecha Izquierda -> Anterior (solo si no es la primera)
        if (currentIndex > 0) {
            changeQuestion(-1);
        }
    }
});