const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelector('.question-text');

function expandText(e) {
    questionText.classList.remove('text-active');
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});