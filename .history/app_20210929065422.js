const plusButton = document.querySelectorAll('.plus-icon');
const questionText = Array.from(document.querySelectorAll('.question-text');



Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});