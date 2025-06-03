const questions = [
  {
    question: "What is a healthy way to deal with setbacks?",
    answers: ["Blame others", "Reflect and learn", "Avoid thinking about it"],
    correct: 1
  },
  {
    question: "Which habit builds mental strength?",
    answers: ["Sleeping 4 hours", "Negative self-talk", "Gratitude journaling"],
    correct: 2
  },
  {
    question: "How can you stay calm under pressure?",
    answers: ["Panic", "Deep breathing", "React instantly"],
    correct: 1
  },
  {
    question: "Resilient people usually...",
    answers: ["Give up quickly", "Adapt to change", "Suppress emotions"],
    correct: 1
  },
  {
    question: "What does self-compassion look like?",
    answers: ["Criticizing yourself", "Taking breaks", "Overworking"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
const container = document.getElementById("question-container");
const scoreDisplay = document.getElementById("score-display");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  container.innerHTML = `
    <p>${q.question}</p>
    ${q.answers.map((ans, i) => `
      <button class="answer-btn" data-index="${i}">${ans}</button>
    `).join('')}
  `;

  document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const selected = parseInt(e.target.dataset.index);
      if (selected === q.correct) {
        score++;
        alert("Correct!");
      } else {
        alert("Oops! That's not right.");
      }
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  container.innerHTML = `<p>You scored ${score} out of ${questions.length}.</p>`;
  let message = "";

  if (score === 5) {
    message = "Excellent! You're mentally strong and self-aware.";
  } else if (score >= 3) {
    message = "Good job! You're building great habits.";
  } else {
    message = "Keep going — resilience is a skill you can grow!";
  }

  container.innerHTML += `<p>${message}</p>`;
  scoreDisplay.textContent = "";
  restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  restartBtn.style.display = "none";
  showQuestion();
});

showQuestion();
