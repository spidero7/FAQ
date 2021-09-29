const plusButton = document.querySelectorAll('.plus-icon');
const questionText = Array.from(document.querySelectorAll('.question-text'));

function expandText(event) {
    questionText.forEach(text => {
        text.classList.remove(text-active);
    });
}

plusButton.addEventListener('click', expandText)