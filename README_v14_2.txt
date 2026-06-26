Punto Smart OS institucional v14.2 - HOME FIX

Correccion principal:
- El index.html raiz ya NO es una pantalla puente.
- Ahora index.html contiene la home completa.
- /home/index.html tambien contiene la home completa.
- 404.html contiene la home completa para evitar pantalla blanca/link solo si GitHub Pages no encuentra una ruta.
- Se mantiene favicon estatico ICO/PNG.

Subida correcta a GitHub Pages:
1. Subir TODO el contenido de esta carpeta a la raiz del repositorio.
2. No subir la carpeta contenedora; subir sus archivos y carpetas internas.
3. Deben quedar en la raiz: index.html, 404.html, favicon.ico, favicon.png, assets/, home/, manifest.webmanifest, robots.txt, sitemap.xml.
4. La ruta /home/ debe tener el archivo home/index.html completo, no el index puente.
