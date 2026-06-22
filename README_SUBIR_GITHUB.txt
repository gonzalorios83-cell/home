PUNTO SMART OS - WEB INSTITUCIONAL v4 ANTIFALLA

Esta versión corrige el problema de verse sin diseño cuando no carga styles.css o favicon.png.

Cambios:
- CSS crítico insertado dentro de las páginas institucionales.
- Rutas relativas para que funcione mejor en GitHub Pages y dominio propio.
- Logo del header dibujado con CSS, no depende de que cargue la imagen.
- Se conserva styles.css, sitemap.xml, robots.txt, CNAME, free/ y plus/.

IMPORTANTE PARA SUBIR A GITHUB:
1) Descomprimir este ZIP.
2) Entrar a la carpeta descomprimida.
3) Subir TODO el contenido a la raíz del repositorio, no la carpeta contenedora.

En la raíz del repo tienen que quedar:
- index.html
- styles.css
- favicon.png
- favicon.svg
- robots.txt
- sitemap.xml
- CNAME
- carpeta free
- carpeta plus
- carpeta como-usarlo
- carpeta para-comercios
- carpeta privacidad

Si se sube solo index.html, se puede ver sin diseño o romper links internos.
