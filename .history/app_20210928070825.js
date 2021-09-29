const plusButton = document.querySelector('.plus-icon');
const questionText = Array.from(document.querySelector('.question-text');

function expandText() {
    questionText.forEach(text => {
        classList.remove('text-active');
})
}

plusButton.addEventListener('click', expandText);
