const plusButton = document.querySelector('.plus-icon');
const questionText = Array.from(document.querySelector('.question-text'));

function expandText() {
    questionText.forEach(text => {
        text.classList.remove('text-active');
})
}

plusButton.addEventListener('click', expandText);

console.log(questionText)
