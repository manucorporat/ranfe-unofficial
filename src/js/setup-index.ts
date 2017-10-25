import { TypeWritter } from './typewritter';

const CITIES = ['Madrid', 'Valladolid', 'Bilbao', 'Sevilla', 'Barcelona', 'Valencia'];

export function setupIndex() {
  setupFormContainer();
  // setupJumboImage();
  setupDynamicJumbo();
  setupDataList();
}
function setupDataList() {
  const datalist = document.getElementById('data-ciudades');
  if (!datalist) {
    return;
  }
  for (let city of CITIES) {
    let option = document.createElement('option');
    option.setAttribute('value', city);
    datalist.appendChild(option);
  }
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
  if (!ele) {
    return;
  }
  const typewritter = new TypeWritter(CITIES, ele);
  setTimeout(() => {
    typewritter.start();
  }, 5000);
}
