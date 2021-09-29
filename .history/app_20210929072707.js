const plusButtons = document.querySelectorAll('.plus-icon');


plusButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.remove('text-active');
    })
})