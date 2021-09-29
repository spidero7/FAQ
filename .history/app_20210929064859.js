const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');


function expandText() {
    console.log('works');
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});