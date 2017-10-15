# Usabilidad y Accesibilidad Web

## Usabilidad Web

### Enlazado profundo

El enlazado profundo consiste en, con un hiperenlace, acceder directamente al sitio web deseado pero a la altura y página interna que muestra aquello que queremos ver, no a la página principal o parte superior de la página. Es más natural que quienes enlacen de manera voluntaria a otra web, lo hagan remitiéndose a información exacta, y no solamente a la URL de la página principal.
Algunos sitios web bloquean a propósito esta característica pues si un usuario no pasa por la portada de un sitio, podría perderse los anuncios publicitarios más importantes, que habitualmente aparecen allí. Y, por lo mismo, se perderían ingresos. Aunque pierda usabilidad estas empresas utilizan en sus servidores lo denominado “URL Rewriting” que permite editar la URL de una página interna por la de la principal.

El código utilizado es:

TODO: CAMBIAR POR NUESTRO CODIGO

> </a class="external free" href="http://es.wikipedia.org/wiki/Enlace_profundo">http://es.wikipedia.org/wiki/Enlace_profundo</a>

Como podemos ver es completamente igual que el código que utilizaríamos para acceder a una página web concreta, solo que esta vez el link apunta a una página web interna, en lugar de a la página web principal.

### Consistencia y estandarización:

Los usuarios de las páginas web tienden a hacer un uso mecánico de esta, por esta razón se debe seguir unas pautas durante todo el desarrollo del sitio web. Los errores más comunes suelen ser:

+ Etiquetado de los botones: Utilizar siempre los mismos términos en aquellos botones que realicen la misma acción. No usar sinónimos como Eliminar o Borrar, utilizar siempre el mismo durante el desarrollo de nuestra página.

+ Orden de los menús: Seguir siempre el mismo orden, si damos las funciones “Crear” “Modificar” “Eliminar”, seguir ofreciéndolas en ese orden, no poner en el siguiente submenú “Crear” “Eliminar”“Modificar” para facilitar un uso más mecánico y fluido de la web.

+ Estilo y posición de los botones: Que los botones se posicionen en lugares intuitivos y siempre en los mismos. Si utilizamos un botón rojo abajo a la derecha para eliminar un ítem de una lista, deberemos seguir esa técnica en todas las listas.

El código utilizado es:

TODO: CAMBIAR POR NUESTRO CODIGO
> </ button class="chrome big signup_forms_submit touchy blue" id="signup_forms_submit"><span class="signup_get_started_btn active">Empezar</span></button>

Es evidente que este estilo puede cambiar a lo largo del desarrollo de nuestra página, pero siempre respetando algunas pautas sobretodo en botones que realicen funciones similares.

### Above the Fold

Este término inglés es utilizado por Jacob Nielsen para indicar que únicamente cerca de un 20% de los usuarios de internet realizan “scroll” la primera vez que visitan una página. Esto quiere decir que en la parte visible de la página debemos poner contenido llamativo y descriptivo de nuestra página para, de alguna forma, enganchar a los usuarios y que éstos quieran visitar de nuevo nuestra página.
El estudio que realizó Jacob Nielsen, el cual podemos ver en: https://www.nngroup.com/articles/scrolling-and-attention/ , revela que debemos intentar situar la información más importante en los primeros 768px de nuestra página. Incidimos en que solo lo más importante, pues si intentamos concentrar nuestra página web en ese espacio es probable que nos quede una web recargada e ilegible que moleste al usuario.
Los elementos básicos e imprescindibles en nuestro espacio principal son:

+ Nombre y logotipo.
+ Propuesta de valor, es decir, mayores beneficios ofrecidos al usuario.
+ Menú de navegación de las secciones principales, relevantes para el usuario.
+ Facilidad para ver qué próximos pasos tomar. Si al usuario le satisface la oferta, deberá ver cómo hacer uso de ella (por ejemplo mediante un registro).

### Posicionamiento en la Web

El usuario muchas veces quiere saber en que parte se encuentra. Por esta razón, muchos servicios de desarrollo web (como wordpress) han añadido la función “breadcrums”, término que significa migas de pan en honor a “Hansel y Gretel” y su peculiar forma de marcar su camino.
Es una buena opción marcar con categorías y secciones para que el usuario conozca los menús por los que ha navegado anteriormente.

TODO: PONER CODIGO UTILIZADO (si lo usamos, se me ocurre en nuestro perfil)


### Uso de Etiquetas

En los diferentes botones, imágenes, hiperenlaces… tenemos la opción de mostrar una pequeña etiqueta descriptiva que nos ayude a comprender el uso o información que este encierre.
Estas etiquetas se muestran al colocar el cursor sobre el elemento en cuestión y pueden significar la diferencia entre un click y la indiferencia del usuario.

### Acción y Respuesta

Muchas veces nos enfada no saber si la página web está funcionando o no y eso es motivo de abandono de la página. Por esta razón debemos mostrar al usuario que su click ha tenido éxito mediante diferentes animaciones o mensajes. Existen diferentes ocasiones en las que utilizar esta técnica, algunos ejemplos serían:
+ Proceso Cargando: Podemos utilizar un Progress Bar o Wheel como el famoso circulo cromático en OSX de la apple, o el reloj de arena en Windows.
+ Proceso exitoso: Podemos mostrar un mensaje de confirmación o redirigir a una página con un mensaje de éxito.
+ Proceso fallido: Mostrar un mensaje de error en el proceso. Muy recomendable es enseñar la razón del fallo, o el lugar donde se produce en un formulario por ejemplo.

### Prevención y solución de errores
El usuario es humano, y como todos, se equivoca. Por esta razón existen técnicas que ayudan a prevenir los errores, como por ejemplo el autocompletar que nos ofrece Google que no sólo ayuda a que no nos equivoquemos al escribir, sino que además acorta nuestras búsquedas.
Sin embargo, hay algunos errores que por mucho que nos enfoquemos en ello, van a ocurrir igualmente. 

Debemos dar al usuario la libertad de deshacer sus acciones para que si alguna ha sido una equivocación pueda volver al estado anterior y subsanar su error. Un ejemplo claro seria el poder eliminar un producto de la cesta de la compra, ¿quién no ha añadido algo y luego se ha arrepentido?