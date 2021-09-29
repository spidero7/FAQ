const plusButton = document.querySelector('.question-btn');
const questionText = document.querySelector('.question-text');

function expandText() {
    questionText.classList.remove('text-active');
}

plusButton.addEventListener('click', expandText);
