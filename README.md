# Relatos para la próxima humanidad · Web docente

Web estática independiente en HTML, CSS y JavaScript puro para presentar el libro como recurso educativo moderno para Secundaria, Bachillerato y FP.

> Nota: `index.html` conserva la landing anterior. La nueva experiencia docente vive en `aula.html` para no sustituir la portada existente.

## Estructura

- `aula.html`: web docente con navegación, secciones docentes, relatos, recursos, encuentro y formulario piloto.
- `css/styles.css`: estilos responsive inspirados en interfaces limpias tipo Apple y Notion.
- `js/content.js`: contenido editable centralizado. Aquí se sustituyen los placeholders.
- `js/main.js`: renderizado de navegación, tarjetas, fichas y pequeñas interacciones.
- `relatos/*.html`: ocho páginas de fichas docentes, una por relato.
- `assets/`: imágenes y materiales existentes.

## Publicación en GitHub Pages

1. Sube el repositorio a GitHub.
2. Entra en **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Selecciona la rama principal y la carpeta raíz (`/root`).
5. Guarda los cambios.

## Edición de contenido

Edita `js/content.js` para cambiar textos de portada, secciones, relatos, recursos y formulario. No es necesario tocar las páginas HTML para modificar las fichas docentes.

## Formulario de contacto

El formulario está preparado, pero no envía datos hasta añadir un endpoint real. Para activarlo, añade la URL de Formspree, Netlify Forms u otro servicio compatible en `formAction` y en el atributo `action` del formulario si se desea envío HTML directo.

## Comprobación local

Abre `aula.html` directamente en el navegador o sirve el proyecto con:

```bash
python3 -m http.server 8000
```

Después visita `http://localhost:8000/aula.html`.
