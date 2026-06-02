let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // Para guardar lo que vas respondiendo

// Se ejecuta automáticamente al cargar el script
function initQuiz() {
    // Verifica si la base de datos de preguntas de RRHH existe
    if (!window.databaseRRHH) return;
    
    currentQuestions = window.databaseRRHH;
    currentIndex = 0;
    userAnswers = {}; 
    
    // Mostramos directamente el contenedor del test
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

    // Opciones fijas para Verdadero o Falso
    const opcionesVF = ["Verdadero", "Falso"];

    opcionesVF.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.innerText = opt;
        
        // Si ya habías respondido esta pregunta antes, mostrar el estado
        if (userAnswers[currentIndex] !== undefined) {
            b.classList.add('disabled');
            if (i === data.correct) b.classList.add('correct');
            if (i === userAnswers[currentIndex] && i !== data.correct) b.classList.add('incorrect');
        }

        // i será: 0 para Verdadero, 1 para Falso
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

    // --- LÓGICA DE SALTO AUTOMÁTICO ---
    setTimeout(() => {
        if (currentIndex === currentQuestions.length - 1) {
            showResults();
        } else {
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
    if (document.getElementById('quiz-container').style.display !== 'block') return;
    if (document.getElementById('score-area').style.display === 'block') return;

    if (event.key === "ArrowRight") {
        changeQuestion(1);
    } else if (event.key === "ArrowLeft") {
        if (currentIndex > 0) {
            changeQuestion(-1);
        }
    }
});

// Iniciamos el quiz automáticamente cuando el archivo se procese
document.addEventListener("DOMContentLoaded", initQuiz);