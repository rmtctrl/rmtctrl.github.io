var image = document.createElement('img');

image.src = 'public/bg-hero.jpg';

function handleImageLoad(event) {
  setTimeout(function() {
    document.body.classList.add('is-hero-loaded');
  }, 500);
}

image.addEventListener('load', handleImageLoad);
