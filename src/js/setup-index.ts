import { TypeWritter } from './typewritter';

const CITIES = ['Madrid', 'Valladolid', 'Bilbao', 'Sevilla', 'Barcelona', 'Valencia'];

export function setupIndex() {
  setupFormContainer();
  // setupJumboImage();
  setupDynamicJumbo();
  setupDataList();
}

// Usado para el autocompletado de las ciudades
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

// Usado para el efecto parallax del formulario
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

// Usado para elegir una imagen de fondo diferente de forma aleatoria
// cada vez que el pagina carga
function setupJumboImage() {
  const imgs = ['jumbo1', 'jumbo2', 'jumbo3', 'jumbo4'];
  const jumbo = document.getElementById('jumbo');
  if (jumbo) {
    jumbo.classList.add(imgs[Math.floor(Math.random() * imgs.length)]);
  }
}

// Usado para configurar el efecto de máquina de escribir
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
