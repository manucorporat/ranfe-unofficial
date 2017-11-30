
const TOKEN_KEY = 'token';

const BASE_URL = 'http://localhost:8000/'

export interface UserData {
  id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

export async function sendForm(command: string, ev: Event): Promise<any|null> {
  ev.preventDefault();
  const form = ev.target as HTMLFormElement;

  try {
    formReadonly(form, true);
    const url = BASE_URL + command;
    const response = await fetch(url, {
      method: 'post',
      body: new FormData(form)
    });
    switch (response.status) {
      case 400: throw new Error('la peticion fue mal enviada');
      case 401: throw new Error('acceso denegado');
    }
    if (response.status !== 200) {
      throw new Error('unknown error')
    }
    formClean(form);
    try {
      return await response.json();
    } catch (e) {
      return null;
    }
  } catch (e) {
    shakeForm(form);
    throw e;
  } finally {
    formReadonly(form, false);
  }
}

export function getLogin(): string {
  return localStorage.getItem('token')
}

export function doLogin(token: string) {
  return localStorage.setItem(TOKEN_KEY, token);
}

export function doLogout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function addUserData(user: UserData) {
  const key = keyForUser(user);
  localStorage.setItem(key, JSON.stringify(user));
}

export function getUserData(user: UserData): UserData | null {
  const key = keyForUser(user);
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
}

export function getFormEntries(form: HTMLFormElement) {
  const results = {};
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    let item = elements.item(i) as HTMLInputElement;
    results[item.name] = item.value;
  }
  return results;
}

export function formReadonly(form: HTMLFormElement, readOnly: boolean) {
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    let item = elements.item(i) as HTMLInputElement;
    item.readOnly = readOnly;
  }
}

export function formClean(form: HTMLFormElement) {
  const elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    let item = elements.item(i) as HTMLInputElement;
    item.value = '';
  }
}

export function shakeForm(form: HTMLFormElement) {
  form.classList.add('form-error');
  setTimeout(() => {
    form.classList.remove('form-error');
  }, 800);
}

function keyForUser(user: UserData): string {
  return `user_${user.id}`;
}
