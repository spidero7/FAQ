const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelector('.question-text');

function expandText() {
    
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});