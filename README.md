# El silencio impuesto por el miedo

Sitio web oficial del libro *El silencio impuesto por el miedo*, de María Eugenia Díaz Malaguilla Expósito.

## Estructura

```
├── index.html          # Página principal
├── css/styles.css      # Estilos
├── js/main.js          # Interactividad
└── assets/images/      # Portada, contraportada y favicon
```

## Desarrollo local

Abre `index.html` en el navegador o sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8080
```

Visita [http://localhost:8080](http://localhost:8080).

## Imágenes del libro

Las portadas actuales son representaciones SVG. Para usar las imágenes originales del libro, sustituye estos archivos en `assets/images/`:

- `portada.svg` → `portada.jpg` (o `.png`)
- `contraportada.svg` → `contraportada.jpg` (o `.png`)

Actualiza las rutas en `index.html` si cambias la extensión.

## Despliegue

Sitio estático compatible con GitHub Pages, Netlify o cualquier hosting de archivos estáticos.

## Contacto

info@elsilencioimpuestoporelmiedo.es
