import { Component, State, Listen } from '@stencil/core';
import { sendForm, getLogin } from '../../utils/utils';

@Component({
  tag: 'admin-delete',
})
export class AdminDelete {

  @State() results: any;

  onSubmit(ev) {
    this.results = await sendForm('results.php', ev);
  }

  @Listen('tableSelected')
  onBorrar(ev: CustomEvent) {
    const journey = ev.detail;
    const formData = new FormData();
    formData.append('id', journey.id);
    formData.append('token', getLogin());

    try {
      await fetch(`http://localhost:8000/delete-journey.php`, {
        method: 'post',
        body: formData
      });
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
        <h3>Seleccione las ciudades de origen y destino</h3>
        <input placeholder="Ciudad origen" name="origin" maxlength="20" required />
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <input placeholder="Ciudad destino" name="destination" maxlength="20"  required />
        </div>
        <div class="form-group">
          <button type="submit" class="admin-submit">
            Añadir viaje
          </button>
        </div>
      </form>,
      <results-table data={this.results} />
    ];
  }
}
