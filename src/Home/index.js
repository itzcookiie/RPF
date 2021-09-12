import '../base.scss';
import './index.scss';
import carousel0 from './fiyin-reading-bible.jpg';
import carousel1 from './livestream-fellowship.jpg';
import carousel2 from './carousel-2.jpg';
import carousel3 from './samuel-with-bible-on-head.jpg';
import video from './welcome-to-kent.mp4';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';

bulmaCollapsible.attach('.is-collapsible');

const instaImageElements = document.querySelectorAll('.follow-us-on-insta-section img');
const instaImages = [carousel0, carousel1, carousel2, carousel3];
instaImageElements.forEach((image, index) => {
  image.src = `${instaImages[index]}`;
})
document.querySelector('video').src = video
document.querySelector('video').play();

document.addEventListener('scroll', e => {
  const button = document.querySelector('.navbar-end .button')
  if(!!window.scrollY) {
    document.body.classList.add('fixnav');
    button.classList.add('is-outlined');
  } else {
    document.body.classList.remove('fixnav');
    button.classList.remove('is-outlined');
  }
})

async function loadModules() {
  const API = await import('../API')
  const { website } = API

}

// loadModules()