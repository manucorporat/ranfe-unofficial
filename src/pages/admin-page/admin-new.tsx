import { Component } from '@stencil/core';

@Component({
  tag: 'admin-new',
})
export class AdminNew {
  render() {
    return [
      <h1>Añadir viaje</h1>,
      <form>

        <div class="form-group">
          <h3>Seleccione las ciudades de origen y destino</h3>
          <input placeholder="Ciudad origen" />
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          <input placeholder="Ciudad destino" />
        </div>

        <div class="form-group">
          <h3>Seleccione hora de salida y llegada</h3>
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          <input placeholder="Hora de salida" />
          <input placeholder="Hola de llegada" />
        </div>


        <div class="form-group">
          <h3>Detalles</h3>
          <i class="fa fa-users" aria-hidden="true"></i>
          <input placeholder="Número de plazas" />
          <i class="fa fa-money" aria-hidden="true"></i>
          <input placeholder="Precio (euros)" />
        </div>

        <div class="form-group">
          <button type="submit" class="admin-submit">
            Añadir viaje
          </button>
        </div>

      </form>
    ];
  }
}
