
const TOKEN_KEY = 'token';

const BASE_URL = 'http://localhost:8000/'

export interface UserData {
  id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

export async function sendForm(command: string, ev: Event) {
  ev.preventDefault();
  const url = BASE_URL + command;
  const response = await fetch(url, {
    method: 'post',
    body: new FormData(ev.target as HTMLFormElement)
  });
  return response.json();
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

function keyForUser(user: UserData): string {
  return `user_${user.id}`;
}
