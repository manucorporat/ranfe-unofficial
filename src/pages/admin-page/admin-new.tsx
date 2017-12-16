import { Component } from '@stencil/core';
import { sendForm } from '../../utils/utils';

@Component({
  tag: 'admin-new',
})
export class AdminNew {

  async onSubmit(ev) {
    try {
      await sendForm('create-journey.php', ev);
    } catch (e) {

    }
  }

  render() {
    return [
      <h1>Añadir viaje</h1>,
      <form onSubmit={(ev) => this.onSubmit(ev)}>

        <div class="form-group">
          <h3>Seleccione las ciudades de origen y destino</h3>
          <input placeholder="Ciudad origen" name="origin" maxlength="20" required />
          <ion-icon name="arrow-forward" />
          <input placeholder="Ciudad destino" name="destination" maxlength="20" required />
        </div>

        <div class="form-group">
          <h3>Seleccione hora de salida y llegada</h3>
          <ion-icon name="time" />
          <input placeholder="Hora de salida" name="departure" maxlength="10" required />
          <input placeholder="Hola de llegada" name="arrival" maxlength="10" required />
        </div>

        <div class="form-group">
          <h3>Detalles</h3>
          <ion-icon name="people" />
          <input type="number" placeholder="Número de plazas" name="num_seats" maxlength="10" required />
          <ion-icon name="cash" />
          <input type="number" placeholder="Precio (euros)" name="price" min="0" step="0.01" max="1000" required />
        </div>

        <div class="form-group">
          <input placeholder="Modelo de tren"name="train_model" required />
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
