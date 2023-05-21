var button = document.querySelector('#btn')
var submit = document.querySelector('.btn')
button.addEventListener('click', function() {
    button.parentElement.appendChild(button);
});
submit.addEventListener('click', function() {
    submit.parentElement.appendChild(submit);
});