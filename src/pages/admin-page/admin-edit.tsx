import { Component, State, Listen, h } from '@stencil/core';
import { sendForm } from '../../utils/utils';
import { Journey } from '../results-page/results-page';

@Component({
  tag: 'admin-edit',
})
export class AdminPage {
  @State() results: any;
  @State() journey: Journey;

  async onSubmit(ev) {
    this.results = await sendForm('results.php', ev);
  }

  @Listen('tableSelected')
  async onSelect(ev: CustomEvent) {
    this.journey = ev.detail;
  }

  async onEdit(ev: Event) {
    try {
      await sendForm('edit-journey.php', ev);
      this.journey = null;
      this.results = null;
      alert('Viaje actualizado');
    } catch (e) {
      alert('Error al actualizar');
    }

  }

  renderForm() {
    const j = this.journey;
    return (<form onSubmit={(ev) => this.onEdit(ev)}>

      <div class="form-group">
        <h3>Seleccione las ciudades de origen y destino</h3>
        <input placeholder="Ciudad origen" name="origin" maxlength="20" value={j.origin} required />
        <ion-icon name="arrow-forward" />
        <input placeholder="Ciudad destino" name="destination" maxlength="20" value={j.destination} required />
      </div>

      <div class="form-group">
        <h3>Seleccione hora de salida y llegada</h3>
        <ion-icon name="clock" />
        <input placeholder="Hora de salida" name="departure" value={j.departure} maxlength="20" required />
        <input placeholder="Hola de llegada" name="arrival" value={j.arrival} maxlength="20" required />
      </div>

      <div class="form-group">
        <h3>Detalles</h3>
        <ion-icon name="people" />
        <input type="number" placeholder="Número de plazas" name="num_seats" value={j.num_seats} min="0" max="10000" required />
        <ion-icon name="cash" />
        <input type="number" placeholder="Precio (euros)" name="price" min="0" step="0.01" max="1000" required />
      </div>

      <div class="form-group">
        <input placeholder="Modelo de tren" name="train_model" maxlength="20" value={j.train_model} required />
      </div>
      <input type="hidden" name="id" value={j.id} />

      <div class="form-group">
        <button type="submit" class="admin-submit">
          Actualizar viaje
      </button>
      </div>

    </form>
    );
  }

  render() {
    return [
      <h1>Editar viajes</h1>,
      <form onSubmit={(ev) => this.onSubmit(ev)}>

        <div class="form-group">
          <h3>Buscar por ciudades de origen y destino</h3>
          <input placeholder="Ciudad origen" name="origin" maxlength="20" required />
          <input placeholder="Ciudad destino" name="destination" maxlength="20" required />
        </div>
        <div class="form-group">
          <button type="submit" class="admin-submit">
            Buscar viajes
          </button>
        </div>
      </form>,
      (!this.journey ? <results-table data={this.results} /> : this.renderForm())
    ];
  }
}
