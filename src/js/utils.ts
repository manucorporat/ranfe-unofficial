
export function toggleVisibility(ev: Event, id: string) {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }
  if (el.classList.contains('show')) {
    el.classList.remove('show');
  } else {
    el.classList.add('show');
    const buttonEle = ev.target as HTMLElement;
    const x = buttonEle.offsetLeft;
    const y = buttonEle.offsetTop - el.offsetHeight - 12;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  }
}

export function isEmpty(str: string | null): str is null {
  return !str || str.length === 0;
}

export function swapInput(inputId1: string, inputId2: string) {
  const input1 = document.getElementById(inputId1) as HTMLInputElement | null;
  const input2 = document.getElementById(inputId2) as HTMLInputElement | null;
  if (input1 && input2) {
    const tmp = input1.value;
    input1.value = input2.value;
    input2.value = tmp;
  }
}

export function shuffleArray(a: any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}
