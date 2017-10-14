
export function setup() {
  setupFormContainer();
  setupJumboImage();
}

function setupFormContainer () {
  const form = document.getElementById('form-container');
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
  jumbo.classList.add(imgs[Math.floor(Math.random() * imgs.length)]);
}
