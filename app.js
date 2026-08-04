// ============================================================
// APP LOGIC - shouldn't need to change this to add questions.
// Edit questions.js instead.
// ============================================================

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const completeScreen = document.getElementById('complete-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');

const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const imagePlaceholder = document.getElementById('image-placeholder');
const answersGrid = document.getElementById('answers-grid');

const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const retryText = document.getElementById('retry-text');

let currentIndex = 0;
let answeredCorrectly = false;

function showScreen(screen) {
  [startScreen, quizScreen, completeScreen].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

function loadQuestion(index) {
  answeredCorrectly = false;
  const question = QUESTIONS[index];

  questionText.textContent = question.text;

  feedbackOverlay.classList.add('hidden');
  feedbackOverlay.classList.remove('correct', 'incorrect');
  nextBtn.classList.add('hidden');
  retryText.classList.add('hidden');

  if (question.image) {
    questionImage.src = question.image;
    questionImage.alt = question.text;
    questionImage.classList.remove('hidden');
    imagePlaceholder.classList.add('hidden');
    questionImage.onerror = () => {
      questionImage.classList.add('hidden');
      imagePlaceholder.classList.remove('hidden');
    };
  } else {
    questionImage.removeAttribute('src');
    questionImage.classList.add('hidden');
    imagePlaceholder.classList.remove('hidden');
  }

  answersGrid.innerHTML = '';
  question.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer.text;
    btn.addEventListener('click', () => selectAnswer(btn, answer));
    answersGrid.appendChild(btn);
  });
}

function selectAnswer(button, answer) {
  if (answeredCorrectly) return;

  // Clear any previous selection highlight.
  answersGrid.querySelectorAll('.answer-btn').forEach(btn => {
    btn.classList.remove('correct', 'incorrect');
  });

  feedbackOverlay.classList.remove('hidden', 'correct', 'incorrect');
  feedbackText.textContent = answer.explanation;

  if (answer.correct) {
    answeredCorrectly = true;
    button.classList.add('correct');
    feedbackOverlay.classList.add('correct');
    feedbackTitle.textContent = 'Correct!';
    nextBtn.classList.remove('hidden');
    retryText.classList.add('hidden');
    answersGrid.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
  } else {
    button.classList.add('incorrect');
    feedbackOverlay.classList.add('incorrect');
    feedbackTitle.textContent = 'Incorrect..';
    nextBtn.classList.add('hidden');
    retryText.classList.remove('hidden');
  }
}

function goToNextQuestion() {
  currentIndex++;
  if (currentIndex >= QUESTIONS.length) {
    showScreen(completeScreen);
  } else {
    loadQuestion(currentIndex);
  }
}

startBtn.addEventListener('click', () => {
  currentIndex = 0;
  loadQuestion(currentIndex);
  showScreen(quizScreen);
});

restartBtn.addEventListener('click', () => {
  currentIndex = 0;
  loadQuestion(currentIndex);
  showScreen(quizScreen);
});

backBtn.addEventListener('click', () => {
  showScreen(startScreen);
});

nextBtn.addEventListener('click', goToNextQuestion);
