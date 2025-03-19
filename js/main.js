let body = document.querySelector('body');
let header = document.querySelector('header');
let hamburger = document.querySelector('.hamb');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active'); 
});

let animation = document.querySelector('.animation');
let animate = document.querySelector('.animate');

animation.addEventListener('click', function() {
    animate.classList.toggle('active');
});