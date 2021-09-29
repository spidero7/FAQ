const plusButton = document.querySelectorAll('.plus-icon');
const questionText = Array.from(document.querySelectorAll('.question-text'));

function expandText() {
    questionText.forEach(text => {
        questionText.classList.remove(app.js:6 Uncaught TypeError: Cannot read properties of undefined (reading 'remove'))
    });
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});