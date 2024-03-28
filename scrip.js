let score = 0;
let currentQuestion = 0;
let timer = 30;
let timerInterval;
let lives = 3;

const questions = [
  {
    question: "¿Cuál es la capital de Argentina?",
    options: ["Buenos Aires", "Santiago", "Lima", "Bogotá"],
    answer: "Buenos Aires"
  },
  {
    question: "¿Cuál es la Capital de Tucumán?",
    options: ["San Miguel de Tucumán", "Buenos Aires", "Rusia", "Barcelona"],
    answer: "San Miguel de Tucumán"
  },
  {
    question: "¿Como se distribulle la proporcion de mujeres en Argentina?",
    options: ["Natalidad", "Mortalidad", "Fecundidad", "Juventud"],
    answer: "Natalidad"
  },
  {
    question: "Cual es el Rio mas Largo de Argentina?",
    options: ["Rio Parana", "Rio Paraguay", "Rio Uruguay", "Amazona"],
    answer: "Rio Parana",
  },
  {
    question: "¿Cual es la capital de Alemania?",
    options: ["Argentina", "Brasil", "Berlin", "Tucumán"],
    answer: "Berlin",
  },
 
];

function startGame() {
  document.getElementById('score').innerText = "Puntaje: " + score;
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question').innerText = question.question;
  const options = document.getElementsByClassName('option');
  for(let i = 0; i < options.length; i++) {
    options[i].innerText = question.options[i];
    options[i].addEventListener('click', checkAnswer);
  }
}

function checkAnswer(event) {
    const selectedOption = event.target.innerText;
    if(selectedOption === questions[currentQuestion].answer) {
      score++;
      document.getElementById('score').innerText = "Puntaje: " + score;
    } else {
      const correctAnswer = questions[currentQuestion].answer;
      document.getElementById('question').innerText = "¡Respuesta incorrecta! La respuesta correcta es: " + correctAnswer;
      decreaseLives();
      return;
    }
    currentQuestion++;
    if(currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endGame();
    }
  }
  

  function decreaseLives() {
    lives--;
    const heartElements = document.getElementsByClassName('heart');
    if (lives >= 0) {
      heartElements[lives].style.backgroundColor = "gray";
    }
    if (lives === 0) {
      clearInterval(timerInterval); // Detenemos el temporizador
      endGame();
    }
  }

  function startTimer() {
    timerInterval = setInterval(function() {
      timer--;
      document.getElementById('timer').innerText = "Tiempo: " + timer;
      if(timer <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    document.getElementById('game').innerHTML = "<h1>Fin del juego</h1><p>Tu puntaje final es: " + score + "</p><button id='return-button'>Volver</button>";
    document.getElementById('return-button').addEventListener('click', function() {
      location.href = "index.html"; // Cambia "index.html" por la ruta de tu página de inicio
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('restart-button').style.display = "none"; // Oculta el botón de reinicio inicialmente
  });
  

startGame();