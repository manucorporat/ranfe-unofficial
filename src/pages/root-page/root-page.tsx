import { Component } from "@stencil/core";

@Component({
  tag: 'root-page',
  styleUrl: 'root-page.scss'
})
export class RootPage {

  render() {
    return (
      <stencil-router>
        <stencil-route url="/" component="home-page" exact={true} />
        <stencil-route url="/results" component="results-page" />
        <stencil-route url="/admin/:section" component="admin-page" />
        <stencil-route url="/login" component="login-page" />
      </stencil-router>
    );
  }
}
