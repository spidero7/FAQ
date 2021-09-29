const plusButton = document.querySelector('plus-icon');
const questionText = document.querySelector('question-text');

function expandText() {
    questionText.classList.add('show-text');
}

plusButton.addEventListener('click', expandText);
