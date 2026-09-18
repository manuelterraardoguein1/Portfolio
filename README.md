# Portfolio

Landing minimalista que centraliza mis proyectos.

## Problema

Necesitaba un lugar único para mostrar mis proyectos sin tener que tocar código
cada vez que termino uno nuevo: agregar un proyecto debería ser editar un JSON,
no escribir un componente.

## Decisiones técnicas

- **Next.js (App Router) + TypeScript + Tailwind**: stack definido para todo el
  portfolio.
- **`data/projects.json` como fuente de datos**: un array de proyectos con
  `nombre`, `descripcion`, `stack`, `demo`, `repo` y `screenshot`. Arranca vacío
  (`[]`).
- **Server Component sin fetch**: `app/page.tsx` importa `data/projects.json`
  directamente (`import projectsData from "@/data/projects.json"`). Al ser un
  Server Component, ese `import` se resuelve en build/request time en el
  servidor, sin necesidad de una API route ni de `fetch` en el cliente.
- **Tipado con `types/project.ts`**: una interfaz `Project` para que TypeScript
  avise si el JSON no matchea la forma esperada.
- **`<img>` en vez de `next/image` para los screenshots**: los screenshots
  apuntan a URLs externas arbitrarias (Vercel, GitHub, etc.). `next/image`
  exige declarar cada dominio permitido en `next.config.ts`, lo cual agrega
  fricción cada vez que se suma un proyecto nuevo con un screenshot en otro
  host.
- **Estado vacío explícito**: si `projects.json` está vacío, se muestra
  "Proyectos próximamente" en vez de un grid en blanco.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Cómo agregar un proyecto

Agregar un objeto a `data/projects.json`:

```json
{
  "nombre": "Nombre del proyecto",
  "descripcion": "Descripción de una línea",
  "stack": ["Next.js", "TypeScript"],
  "demo": "https://...",
  "repo": "https://github.com/...",
  "screenshot": "https://..."
}
```

## Demo

Pendiente de deploy en Vercel.
