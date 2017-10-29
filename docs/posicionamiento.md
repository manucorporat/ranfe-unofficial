# Posicionamiento

En nuestra web hemos aplicado las tecnicas de SEO tradicionales, que por otra parte tienen cada vez menos relavancia. El objectivo de un motor de busqueda no es leer los `<meta>` o los `<title>` o análisis probabilísticos simples del número de veces que un termino se repite, el objetivo último de un motor de busqueda es comportarse como un humano, que con su criterio recomienda una serie de enlaces dado unos criterios de busqueda.

Para ello, Google cada vez usa más tecnicas de machine learning realimentadas por el propio comportamiento de los usuarios, es decir, si google detecta que los usuarios leen con interes (tiempo) los contenidos. Que un perfil de usuario visita de forma recurrente un sitio. Que el contenido es original y de calidad, sin faltas de ortografía e interesante.

Si tu web no es responsivo y no está optimizado para teléfonos móviles, es dificil que se la recomiende a un usuario que la busca desde un iPhone.

Si tu web tarda muchísimo en cargar cuando un usuario usa una red 3G, es dificil que google la recomiende.

Si tu web esta llena de contenido copiado, lleno de anuncios que impiden la correcta lectura, es dificil que google la recomiende.

En resumen, el SEO tradicional está muriendo y cada vez girá más y más entorno a la usabilidad y la accesibilidad. Cuando usamos `<meta>`, el atributo "alt" o toda la API web de ARIA, no lo debemos hacer pensando en el SEO, sino en buenas practicas hacia nuestro usuarios humanos, que con discapacidades o no, van a poder usar nuestra web sin problemas y disfrutar de todo el contenido.

Este es el objetivo último de los buscadores como google, y para nosotros significará en un mejor posicionamiento web. Es una estrategia WIN-WIN donde todos ganamos:

- los buscadores porque son más utiles
- los usuarios que encuentran contenido veridico y de calidad.
- nosotros que consiguimos más clientes através de un mejor posicionamiento.

Con respecto a las técnicas tradicionales hemos usado:

### Palabras clave

- Fijos: Renfe, trenes, viaje
- Dinamicos: Viajes más populares: "Madrid a Valencia"

Dichas palabras claves se repeten dentro de la web:

- **Title**
 ```html
<title>Renfe - Viajes tan buenos como el destino</title>
```

- **Meta keyboards**
 ```html
<meta name="keywords" lang="es-es" content="viajes, trenes, renfe, buses, madrid, barcelona, transporte" />
```

- **Meta description**
 ```html
<meta name="description" lang="es-es" content="Página oficial de renfe. Horarios, reserva, venta, billetes, alquiler" />
```

- **Titulo principal `<h1>`**
```html
<h1>Viajes tan buenos como
  <span class="typewriter" id="dynamic-jumbo">el destino</span>
</h1>
```

- **Enlaces**:
```html
<a href="/abonos.html">Abonos</a>
<a href="/horarios.html">Horarios</a>
```

- **Imágenes**:
```html
<img src="/madrid.png" alt="Madrid" />
<img src="/barcelona.png" alt="Barcelona" />
```

### Evitar uso de Javascript

Los motores de busqueda actuales pueden ejecutar JS que modifica el DOM, añadiendo contenido pero bien es cierto que esto no lo hacen con todas las páginas webs por cuestiones de recursos.

Teniendo en cuenta que nuestra web no es popular, es muy posible que Google no ejecute nuestro JS, por esta razón y por rendimiento, hemos decidido que el contenido principal sea servido directamente desde el servidor y que solo los resultados dinámicos de la busqueda de tickets sea actualizado usando AJAX.


### Dominio relevante

Registramos el dominio `https://renfe.design` el cual contiene dos de las palabras cable más relevantes para nosotros en este trabajo: renfe y design (diseño).


### Uso de HTTPS

Actualmente google y otros busquadores recompensan el uso de conexiones seguras. Por ello, configuramos un hosting gratuito de github para los ficheros estáticos de los que consta la web y usamos el CDN (Content Delivery Network) de Cloudflare para optimizar el rendimiento web al cachear globalmente los recusos y reducir el número de network hops.

Posteriomente, RENFE junto con la empresa de ciberseguridad S21sec decieron cerrarnos la web y por ello actualmente solo esta accesible aquí: https://manucorporat.github.io/ranfe-unofficial/

### Uso apropiado de enlaces

- Enlazando siempre a contenido de calidad
- Con un texto relevante
- Sin usar target="_blank"

