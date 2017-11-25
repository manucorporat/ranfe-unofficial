import { Component, Prop } from '@stencil/core';
import { getLogin } from '../../utils/utils';

@Component({
  tag: 'admin-page',
  styleUrl: 'admin-page.scss'
})
export class AdminPage {

  private sections: any[];

  @Prop() match: any;
  @Prop() history: any;

  constructor() {
    this.sections = [
      {
        id: 'new',
        name: 'Añadir viaje',
        component: 'admin-new'
      },
      {
        id: 'delete',
        name: 'Borrar viaje',
        component: 'admin-delete'
      },
      {
        id: 'modify',
        name: 'Editar viaje',
        component: 'admin-edit'
      }];
  }

  componentDidLoad() {
    const login = getLogin();
    if (!login) {
      this.history.push('/login');
    }
  }

  getSection() {
    return this.match.params.section;
  }

  render() {
    const selected = this.sections.find(s => s.id === this.getSection());
    const Component = selected.component;

    return [
      <renfe-header background={true} />,
      <div class="flex-section">
        <div class="side-container admin-nav" role="navigation">
          <div class="sticky">
            {this.sections.map(s => (
              <stencil-route-link
                url={`/admin/${s.id}`}
                class={{ 'selected': s === selected }}
              >{s.name}</stencil-route-link>))}

            <stencil-route-link url={`/login?logout`}>LOGOUT</stencil-route-link>
          </div>
        </div>
        <div class="main-container">
          <div class="main-content">
            <Component />
          </div>
        </div>
      </div>,
      <renfe-footer />
    ];
  }
}
