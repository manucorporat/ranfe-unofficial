import { Component, Prop, State } from '@stencil/core';
import { doLogin, getLogin, doLogout, sendForm } from '../../utils/utils';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.scss'
})
export class LoginPage {

  @State() didError = false;
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
      this.loginError();
    }
  }

  loginError() {
    console.error('login failed');
    this.didError = true;
    setTimeout(() => this.didError = false, 800);
  }

  render() {
    return [
      <renfe-header background={false} />,
      <div class="login-container">
        <div class="login-photo" />
        <div class="login-content">
          <form onSubmit={(ev) => this.onSubmit(ev)} class={{ 'form-error': this.didError }}>
            <input type="text" placeholder="Usuario" name="user" required />
            <input type="password" placeholder="Contraseña" name="password" required />
            <button type="submit">Acceder</button>
          </form>
        </div>
      </div>
    ];
  }
}
