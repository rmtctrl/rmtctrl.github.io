var image = document.createElement('img');
var hero = document.querySelector('.hero');

image.src = 'public/bg-hero.jpg';

function handleImageLoad(event) {
  setTimeout(function() {
    hero.classList.add('is-loaded');
  }, 500);
}

image.addEventListener('load', handleImageLoad);
