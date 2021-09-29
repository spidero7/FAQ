const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');

function expandText() {
    questionText.forEach(text () =>.classList.remove('text-active');
}

plusButton.addEventListener('click', expandText);

