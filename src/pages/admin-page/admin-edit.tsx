import { Component, State, Listen } from '@stencil/core';
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
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <input placeholder="Ciudad destino" name="destination" maxlength="20" value={j.destination} required />
      </div>

      <div class="form-group">
        <h3>Seleccione hora de salida y llegada</h3>
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        <input placeholder="Hora de salida" name="departure" value={j.departure} maxlength="10" required />
        <input placeholder="Hola de llegada" name="arrival" value={j.arrival} maxlength="10" required />
      </div>

      <div class="form-group">
        <h3>Detalles</h3>
        <i class="fa fa-users" aria-hidden="true"></i>
        <input type="number" placeholder="Número de plazas" name="num_seats" value={j.num_seats} maxlength="10" required />
        <i class="fa fa-money" aria-hidden="true"></i>
        <input placeholder="Precio (euros)" name="price" maxlength="10" value={j.price} required />
      </div>

      <div class="form-group">
        <input placeholder="Modelo de tren" name="train_model"  value={j.train_model} required />
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
        <h3>Seleccione las ciudades de origen y destino</h3>
        <input placeholder="Ciudad origen" name="origin" maxlength="20" required />
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <input placeholder="Ciudad destino" name="destination" maxlength="20"  required />
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
