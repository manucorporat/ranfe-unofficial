#Ranfe un-official

## Directorios

### Desarrollo

- src/index.ts: punto de acceso del codigo javascript
- src/index.scss: punto de acceso del codigo css
- src/js/*: ficheros javascript antes de compilar
- src/css/*: ficheros scss antes de compilar

### WEB funcional

- www/*: web funciona en modo desarrollo
- www/index.html: fichero HTML de la pagina principal
- www/results.html: fichero HTML de la pagina de los resultados de busqueda
- www/build/*: ficheros JS y CSS generados por el transpilador
- www/assets/*: todas las imagenes y recursos que no son codigo
- www/assets/data/*: datos de los billetes


## Como probar la web:

### Metodo 1. Abriendo www/index.html con el navegador

### Metodo 2. Desarrollo.

- 1. Tener node y npm instalado
- 2. Ejecutar `npm install` en la raiz del proyecto
- 3. Ejecutar `npm run watch` en la raiz del proyecto
- 4. Abrir el navegador en la URL: localhost:3333/index.html

