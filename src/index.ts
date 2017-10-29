// Variables exportadas en este modulo, podrán ser accedidas directamente desde el exterior
// en window.app
// Punto de entrada para el Javascript (usado tanto por index.html y results.html)

/** Rollup (https://rollupjs.org/) queda configurado para generar un
 * único fichero en formato iife ( https://en.wikipedia.org/wiki/Immediately-invoked_function_expression )
 * el cual es ideal para un navegador y su uso desde javascript normal.
 *
 * Se generara un objecto window.app con las propiedades exportadas acontinuacion:
 */
export { http } from './js/http';
export { weather } from './js/weather';
export { toggleVisibility, swapInput } from './js/utils';
export { setupIndex } from './js/setup-index';
export { setupResults } from './js/setup-results';
