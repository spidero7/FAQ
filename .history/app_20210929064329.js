const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');

function expandText() {
    questionText.forEach(text => {
        text.classList.remove()
    });
}

plusButton.addEventListener('click', expandText)