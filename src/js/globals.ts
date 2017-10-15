export { http } from './http';
export { weather } from './weather';

export function toggle(ev: any, id: string) {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }
  if (el.classList.contains('show')) {
    el.classList.remove('show');
  } else {
    el.classList.add('show');
    const buttonEle = ev.target;
    const x = buttonEle.offsetLeft;
    const y = buttonEle.offsetTop - el.offsetHeight - 12;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  }
}
