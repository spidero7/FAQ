const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');


function expandText() {
    console.log('')
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});