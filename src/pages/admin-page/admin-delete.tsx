import { Component } from '@stencil/core';

@Component({
  tag: 'admin-delete',
})
export class AdminDelete {
  render() {
    return [
      <h1>Borrar viaje</h1>,
      <div>Delete</div>
    ];
  }
}
