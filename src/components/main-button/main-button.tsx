import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'main-button',
  styleUrl: 'main-button.scss'
})
export class MainButton {

  @Prop() icon: string;
  @Prop() title: string;
  @Prop() description: string;

  render() {
    return [
      <ion-icon name={this.icon} />,
      <h4>{this.title}</h4>,
      <p>{this.description}</p>
    ];
  }
}
