# PetVilla 🐾

Plataforma de cuidado de mascotas en Villa del Rosario. Conecta a los dueños de mascotas con veterinarios, peluquerías y paseadores confiables.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **Tailwind CSS v3.4+** - Estilos utility-first (v4 aún no disponible como estable)
- **shadcn/ui** - Componentes UI accesibles
- **React Router** - Navegación
- **Lucide React** - Iconos

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Si quieres agregar más componentes de shadcn/ui:
```bash
npx shadcn@latest add [nombre-del-componente]
```

## 🏃 Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 🎯 Características

- 🔍 Búsqueda de servicios (veterinarios, peluquerías, paseadores)
- 📍 Mapas interactivos de ubicación
- 📅 Sistema de reservas
- ⭐ Reseñas y calificaciones
- 🔔 Recordatorios de cuidados y vacunaciones
- 📱 Diseño responsive y móvil-first

## 📁 Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables
│   ├── ui/         # Componentes shadcn/ui
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── pages/          # Páginas de la aplicación
├── lib/            # Utilidades
└── hooks/          # Custom hooks
```

## 🎨 Personalización

Los colores y temas se pueden personalizar en `src/index.css` y `tailwind.config.ts`.

## 📝 Licencia

MIT

