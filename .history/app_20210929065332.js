const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');


questionText.forEach

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});