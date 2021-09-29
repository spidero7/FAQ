const plusButton = document.querySelector('.plus-icon');
const questionText = Arraydocument.querySelector('.question-text');

function expandText() {
    questionText.forEach(text => {
        classList.remove('text-active');
})
}

plusButton.addEventListener('click', expandText);
