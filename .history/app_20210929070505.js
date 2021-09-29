const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelector('.question-text');

function expandText() {
    questionText.classList.remove
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});