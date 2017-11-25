import { Component, Prop, State } from '@stencil/core';
import { doLogin, getFormEntries, getLogin, doLogout } from '../../utils/utils';

@Component({
  tag: 'login-page',
  styleUrl: 'login-page.scss'
})
export class LoginPage {

  // async onSubmit(ev: Event) {
  //   try {
  //     const json = await sendForm('/login.php', ev);
  //     doLogin(json.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  @State() didError = false;
  @Prop() history: any;

  componentDidLoad() {
    if (location.search.includes('logout')) {
      doLogout();
    }
    if (getLogin()) {
      this.history.push('/admin/new');
    }
  }

  onSubmit(ev: Event) {
    ev.preventDefault();
    const formData = getFormEntries(ev.target as any);
    const user = formData['user'];
    const password = formData['password'];
    if (user === 'admin' && password === 'admin') {
      doLogin('admin');
      this.history.push('/admin/new');
    } else {
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
