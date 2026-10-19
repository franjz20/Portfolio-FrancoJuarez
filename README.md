# Portfolio — FJ

Portfolio personal bilingüe (ES/EN) construido con **React 19 + Vite + Tailwind CSS 4**.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
npm run lint     # lint con oxlint
```

## Cómo personalizar el contenido

Todo el contenido editable está en un solo archivo: **`src/data/content.js`**

- Cada texto existe en español (`es`) e inglés (`en`) — edita ambos bloques.
- Redes sociales y email: array `socials` al inicio del archivo.
- Tecnologías: array `skills` (el `name` debe coincidir con el mapa de iconos en `src/components/Skills.jsx`; si agregas una tecnología nueva, importa su icono de `react-icons/si` ahí).
- Proyectos, educación y cursos: dentro de cada bloque de idioma.

## Cómo cambiar las imágenes

Reemplaza los archivos en `public/assets/` **manteniendo el mismo nombre**:

| Archivo          | Uso                          |
| ---------------- | ---------------------------- |
| `avatar.svg`     | Tu foto en el Hero           |
| `project-1.svg`  | Captura del proyecto 1       |
| `project-2.svg`  | Captura del proyecto 2       |
| `project-3.svg`  | Captura del proyecto 3       |
| `favicon.svg`    | Icono de la pestaña (en `public/`) |

Puedes usar `.png` o `.jpg` — solo actualiza la ruta `image` en `content.js` y el `src` del avatar en `src/components/Hero.jsx`.

## Deploy en Vercel

1. Sube este proyecto a un repositorio en GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repo.
3. Vercel detecta Vite automáticamente (build: `npm run build`, output: `dist`) — no hace falta configurar nada.
4. **Deploy**. Cada push a `main` redespliega solo.

## Estructura

```
src/
├── data/content.js          ← TODO el contenido editable (ES/EN)
├── context/LanguageContext  ← estado de idioma + persistencia
├── hooks/useReveal.js       ← animación on-scroll (IntersectionObserver)
├── components/              ← Navbar, Hero, About, Projects, Skills,
│                              Education, Contact, Footer, Reveal
└── index.css                ← tema Tailwind v4 + animaciones
```
