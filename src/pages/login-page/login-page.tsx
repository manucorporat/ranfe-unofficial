import { Component, Prop, Build, h } from '@stencil/core';
import { doLogin, getLogin, doLogout, sendForm } from '../../utils/utils';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.scss'
})
export class LoginPage {

  @Prop() history: any;

  componentDidLoad() {
    if (Build.isServer) {
      return;
    }
    if (location.search.includes('logout')) {
      doLogout();
    }
    if (getLogin()) {
      this.history.push('/admin/new');
    }
  }

  async onSubmit(ev: Event) {
    try {
      const json = await sendForm('login.php', ev);
      doLogin(json.token);
      this.history.push('/admin/new');
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return [
      <renfe-header background={false} />,
      <div class="login-container">
        <div class="login-photo" />
        <div class="login-content">
          <form onSubmit={(ev) => this.onSubmit(ev)}>
            <input type="text" maxlength="20" placeholder="Usuario" name="user" required />
            <input type="password" maxlength="30" placeholder="Contraseña" name="password" required />
            <button type="submit">Acceder</button>
          </form>
        </div>
      </div>
    ];
  }
}
