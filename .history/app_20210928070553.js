const plusButton = document.querySelector('.plus-icon');
const questionText = document.querySelector('.question-text');

function expandText() {
    forEach.questionText.classList.remove('text-active');
}

plusButton.addEventListener('click', expandText);
