const plusButton = document.querySelectorAll('.plus-icon');
const questionText = document.querySelectorAll('.question-text');

function expandText(e) {
    questionText.forEach(text => {
        text.classList.remove("text-active");
        console.log(e.currentTarget)
    });
}

Array.from(plusButton).forEach(button => {
    button.addEventListener('click', expandText)
});