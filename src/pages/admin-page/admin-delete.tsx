import { Component, State, Listen, h } from '@stencil/core';
import { sendForm, getLogin, sendPOST } from '../../utils/utils';
import { Journey } from '../results-page/results-page';

@Component({
  tag: 'admin-delete',
})
export class AdminDelete {

  @State() results: Journey[];

  async onSubmit(ev) {
    this.results = await sendForm('results.php', ev);
  }

  @Listen('tableSelected')
  async onBorrar(ev: CustomEvent) {
    const journey = ev.detail;
    try {
      await sendPOST('delete-journey.php', {
        id: journey.id,
        token: getLogin()
      });
      const index = this.results.findIndex(j => j.id === journey.id);
      if(index >= 0) {
        this.results.splice(index, 1);
        this.results = this.results.slice();
      }
      alert('Viaje borrado');
    } catch {
      alert('Error al borrar');
      return null;
    }
  }

  render() {
    return [
      <h1>Borrar viaje</h1>,
      <form onSubmit={(ev) => this.onSubmit(ev)}>

        <div class="form-group">
          <h3>Buscar por ciudades de origen y destino</h3>
          <input placeholder="Ciudad origen" name="origin" maxlength="20" required />
          <input placeholder="Ciudad destino" name="destination" maxlength="20"  required />
        </div>
        <div class="form-group">
          <button type="submit" class="admin-submit">
            Buscar viajes
          </button>
        </div>
      </form>,
      <results-table data={this.results} />
    ];
  }
}
