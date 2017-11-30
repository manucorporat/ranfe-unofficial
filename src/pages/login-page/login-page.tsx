import { Component, Prop } from '@stencil/core';
import { doLogin, getLogin, doLogout, sendForm, shakeForm } from '../../utils/utils';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.scss'
})
export class LoginPage {

  @Prop() history: any;

  componentDidLoad() {
    if (Context.isServer) {
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
      this.loginError(ev.target as HTMLFormElement);
    }
  }

  loginError(form: HTMLFormElement) {
    console.error('login failed');
    shakeForm(form);
  }

  render() {
    return [
      <renfe-header background={false} />,
      <div class="login-container">
        <div class="login-photo" />
        <div class="login-content">
          <form onSubmit={(ev) => this.onSubmit(ev)}>
            <input type="text" placeholder="Usuario" name="user" required />
            <input type="password" placeholder="Contraseña" name="password" required />
            <button type="submit">Acceder</button>
          </form>
        </div>
      </div>
    ];
  }
}
