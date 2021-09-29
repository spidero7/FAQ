const plusButton = document.querySelectorAll('.plus-icon');
const questionText = Array.from(document.querySelectorAll('.question-text'));

function expandText() {
    questionText.forEach(t)
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});