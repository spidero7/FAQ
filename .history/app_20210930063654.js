// Using selectors inside the element


// Traversing the DOM
const buttons = document.querySelectorAll('.question-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
})