const plusButton = document.querySelector('.plus-icon');
const questionText = Array.from(document.querySelector('.question-text'));

function expandText() {
    questionText.forEach(text => {
        tex.classList.remove('text-active');
})
}

plusButton.addEventListener('click', expandText);
