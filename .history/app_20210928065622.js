const plusButton = document.querySelector('.question-btn');
const questionText = document.querySelector('.question-text');

function expandText() {
    questionText.classList.add('show-text');
}

plusButton.addEventListener('click', expandText);
