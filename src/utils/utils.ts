import { Journey } from "../pages/results-page/results-page";


const TOKEN_KEY = 'token';
// export const BASE_URL = '/API/';
export const BASE_URL = 'http://localhost:8000/';


export async function requestJourneys(origin: string, destination: string, day: string) {
  return sendPOST('results.php', {
    origin,
    destination,
    day
  }) as Promise<Journey[]>;
}

export async function sendPOST(command: string, data: {[key: string]: string}) {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return sendBody(command, formData);
}

export async function sendJSON(command: string, data: any) {
  return sendBody(command, JSON.stringify(data));
}

async function sendBody(command: string, body: any) {
  const url = BASE_URL + command;
  const response = await fetch(url, {
    method: 'post',
    body: body
  });
  if (response.status !== 200) {
    throw new Error('error')
  }
  return await response.json();
}


export async function sendForm(command: string, ev: Event): Promise<any|null> {
  ev.preventDefault();
  const form = ev.target as HTMLFormElement;

  try {
    const body = new FormData(form);
    const token = getLogin();
    if (token) {
      body.append('token', token);
    }
    formReadonly(form, true);
    const url = BASE_URL + command;
    const response = await fetch(url, {
      method: 'post',
      body: body,
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

export function getURLParam(name: string, url?: string) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
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
