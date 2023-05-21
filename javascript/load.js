var load = document.querySelector('#load');
var type = document.querySelector('#typing-demo');
var slide = document.querySelector('.overlay');
window.addEventListener('load', function(){
    this.setTimeout(function() {
        load.classList.add('gone');
        type.classList.add('typing-demo');
    }, 2000)
    this.setTimeout(function() {
        load.parentElement.removeChild(load);
    }, 3000)
});
//slide animation for text in feedback
setTimeout(function() {
    slide.classList.add('slide');
},3200)