const plusButtons = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');

plusButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        questionText.classList.remove(text-active)
    })
})