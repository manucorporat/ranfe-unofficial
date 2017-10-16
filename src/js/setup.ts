import { TypeWritter } from './typewritter';

export function setupIndex() {
  setupFormContainer();
  // setupJumboImage();
  setupDynamicJumbo();
}

function setupFormContainer () {
  const form = document.getElementById('form-container');
  if (!form) {
    return;
  }
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 648) {
      form.style.transform = 'translateY(-' + y * 0.3 + 'px)';
    }
  }, false);
}

function setupJumboImage() {
  const imgs = ['jumbo1', 'jumbo2', 'jumbo3', 'jumbo4'];
  const jumbo = document.getElementById('jumbo');
  if (jumbo) {
    jumbo.classList.add(imgs[Math.floor(Math.random() * imgs.length)]);
  }
}

function setupDynamicJumbo() {
  const ele = document.getElementById('dynamic-jumbo') as HTMLElement;
  const typewritter = new TypeWritter([
    'Madrid', 'Valladolid', 'Bilbao', 'Sevilla', 'Barcelona', 'Valencia'
  ], ele);
  setTimeout(() => {
    typewritter.start();
  }, 5000);
}
