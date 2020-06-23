import { Component, h } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss'
})
export class HomePage {

  render() {
    return [
      <renfe-header />,
      <renfe-jumbo />,

      <div class="content">
        <div class="buttons" role="navigation">
          <main-button icon="train" title="Mis Viajes" description="Consulta tus ultimos viajes" />
          <main-button icon="checkbox" title="Bonos" description="Ahorra comprando bonos de viajes" />
          <main-button icon="close" title="Anulaciones" description="Cambia o cancela tu viaje" />
          <main-button icon="card" title="Factura Online" description="Consulta la factura de tu viaje" />
        </div>
      </div>,

      <div class="content cities">
        <h2>Explora</h2>
        <div class="cities-container">
          <div class="city madrid">Madrid</div>
          <div class="city barcelona">Barcelona</div>
          <div class="city valencia">Valencia</div>
          <div class="city bilbao">Bilbao</div>
          <div class="city sevilla">Sevilla</div>
          <div class="city madrid">Madrid</div>
          <div class="city barcelona">Barcelona</div>
          <div class="city valencia">Valencia</div>
          <div class="city bilbao">Bilbao</div>
          <div class="city sevilla">Sevilla</div>
          <div class="city discover">+</div>
        </div>
      </div>,

      <renfe-footer />
    ];
  }
}
