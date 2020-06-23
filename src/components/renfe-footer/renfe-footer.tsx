import { Component, h } from "@stencil/core";

@Component({
  tag: 'renfe-footer',
  styleUrl: 'renfe-footer.scss'
})
export class Footer {

  hostData() {
    return {
      'role': 'footer'
    };
  }
  render() {
    return [
      <ul>
        <li><stencil-route-link url="/login">Administración</stencil-route-link></li>
        {/* <li><stencil-route-link url="/team">Quienes somos</stencil-route-link></li>
        <li><stencil-route-link url="/soporte">Soporte</stencil-route-link></li> */}
      </ul>
    ];
  }
}
