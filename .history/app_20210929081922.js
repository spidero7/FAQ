const buttons = document.querySelectorAll('question-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        console.log(e.currentTarget)
    });
})