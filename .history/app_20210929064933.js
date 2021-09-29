const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');


function expandText() {
    questionText.classList.remove('text-active');
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});