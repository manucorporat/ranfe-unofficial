import { Component, Element } from '@stencil/core';

const CITIES = ['Madrid', 'Valladolid', 'Bilbao', 'Sevilla', 'Barcelona', 'Valencia'];

@Component({
  tag: 'renfe-jumbo',
  styleUrl: 'renfe-jumbo.scss'
})
export class RenfeJumbo {

  @Element() el: HTMLElement;

  componentDidLoad() {
    this.setupParallax();
    this.setupTypeWritter();
  }

  setupParallax() {
    const form = this.el.querySelector('#form-container') as any;
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

  setupTypeWritter() {
    setTimeout(() => {
      const writer = this.el.querySelector('type-writter') as any;
      writer.start();
    }, 5000);
  }

  render() {
    return (
      <div class="jumbo-content">
        <div class="form-container" id="form-container" role="main">
          <h1>Viajes tan buenos como <type-writter text="el destino" sentences={CITIES} /></h1>
          <div class="widget">
            <search-widget />
          </div>
        </div>
      </div>
    );
  }
}
