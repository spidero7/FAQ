const plusButton = document.querySelector('.question-btn');
const questionText = document.querySelector('.question-text');

function expandText() {
    questionText.classList.add('text-active');
}

plusButton.addEventListener('click', expandText);
