const plusButton = document.querySelectorAll('.plus-icon');
const questionText = Array.from(plusButton.querySelectorAll('.question-text'));

function expandText() {
    questionText.forEach(text => {
        text.classList.remove('text-active');
    });
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});