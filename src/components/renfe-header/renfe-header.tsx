import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'renfe-header',
  styleUrl: 'renfe-header.scss'
})
export class HomePage {

  @Prop() background = false;

  hostData() {
    return {
      'role': 'header',
      class: {
        'background': this.background
      }
    };
  }
  render() {
    return [
      <stencil-route-link url='/'>
        trainco
      </stencil-route-link>,
      <a class="github" href="https://github.com/manucorporat/renfe">
        ver en github
      </a>
    ];
  }
}
