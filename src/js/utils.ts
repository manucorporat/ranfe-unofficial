
// Utilidad para ocultar o mostrar cualquier elemento de la pantalla y encima mover a una posicion
// relativa al boton clicado, estilo popover.
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

// Retorna si un string es cadena vacia
export function isEmpty(str: string | null): str is null {
  return !str || str.length === 0;
}

// Intercambia el contenido de dos inputs de texto
export function swapInput(inputId1: string, inputId2: string) {
  const input1 = document.querySelector(`input[name=${inputId1}]`) as HTMLInputElement | null;
  const input2 = document.querySelector(`input[name=${inputId2}]`) as HTMLInputElement | null;
  if (input1 && input2) {
    const tmp = input1.value;
    input1.value = input2.value;
    input2.value = tmp;
  }
}

// Barajea aleatoriamente un array de datos
export function shuffleArray(a: any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}

// Retorna la propiedad solicitada del query de la URL actual
export function getParameterByName(name: string): string {
  const url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return '';
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Utilidad para actualizar varios nodos del DOM de forma simulatanea
export function setDOMValues(query: string, key: string, value: any) {
  const elements = document.querySelectorAll(query);
  for (let i = 0; i < elements.length; i++) {
    const el = elements.item(i) as any;
    el[key] = value;
  }
}
