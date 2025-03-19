let body = document.querySelector('body');
let header = document.querySelector('header');
let hamburger = document.querySelector('.hamb');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active'); 
});

let animations = document.querySelectorAll('.animation');
let animates = document.querySelectorAll('.animate');

animations.forEach(function(animation) {
    animation.addEventListener('click', function() {
        
        let section = animation.closest('section'); 
        let animate = section.querySelector('.animate'); 

        if (animate) {
            animate.classList.toggle('active');
        }
    });
});