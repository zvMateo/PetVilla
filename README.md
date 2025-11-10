# PetVilla 🐾

**Plataforma de cuidado de mascotas en Villa del Rosario**

Conecta a los dueños de mascotas con veterinarios, peluquerías y paseadores confiables de forma rápida, segura y sencilla.

---

## ✨ Características Principales

### 🔍 **Búsqueda Inteligente**

- Encuentra servicios por tipo: veterinarios, peluquerías, paseadores, guarderías
- Filtros por ubicación, precio y calificación
- Resultados instantáneos y relevantes

### 📅 **Sistema de Reservas**

- Agenda citas de manera rápida y sencilla
- Gestiona tus próximas citas
- Historial completo de servicios utilizados

### ⭐ **Reseñas Verificadas**

- Lee opiniones de otros dueños de mascotas
- Sistema de calificación transparente
- Proveedores verificados y confiables

### 🔔 **Recordatorios Inteligentes**

- No olvides las vacunas de tu mascota
- Alertas de desparasitación
- Recordatorios de peluquería y chequeos veterinarios

### 📱 **Diseño Responsive**

- Optimizado para móviles, tablets y desktop
- Interfaz intuitiva y moderna
- Experiencia de usuario fluida

### 🎨 **UI/UX Moderna**

- Diseño con Tailwind CSS
- Componentes de shadcn/ui
- Animaciones suaves y profesionales
- Notificaciones en tiempo real

---

## 🚀 Tecnologías

| Categoría          | Tecnologías           |
| ------------------ | --------------------- |
| **Frontend**       | React 18 + TypeScript |
| **Estilos**        | Tailwind CSS v3.4     |
| **Componentes**    | shadcn/ui + Radix UI  |
| **Enrutamiento**   | React Router v6       |
| **Formularios**    | React Hook Form + Zod |
| **Notificaciones** | Sonner                |
| **Iconos**         | Lucide React          |
| **Build Tool**     | Vite                  |

---

## 📦 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/zvMateo/PetVilla.git
cd PetVilla
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

---

## 🏗️ Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecuta ESLint
```

---

## 📁 Estructura del Proyecto

```
PetVilla/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── Header.tsx   # Navegación principal
│   │   ├── Footer.tsx   # Pie de página
│   │   └── Layout.tsx   # Layout principal
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Login.tsx
│   │   └── ...
│   ├── contexts/        # Contextos de React
│   │   └── AuthContext.tsx
│   ├── data/            # Datos mock
│   ├── types/           # Definiciones TypeScript
│   ├── lib/             # Utilidades
│   └── hooks/           # Custom hooks
├── public/              # Archivos estáticos
└── ...
```

---

## 🎯 Funcionalidades Implementadas

### Autenticación

- ✅ Inicio de sesión
- ✅ Registro de usuarios
- ✅ Protección de rutas privadas
- ✅ Persistencia de sesión
- ✅ Notificaciones de estado

### Servicios

- ✅ Listado de servicios
- ✅ Detalle de servicio
- ✅ Búsqueda y filtros
- ✅ Calificaciones y reseñas

### Reservas

- ✅ Agendar citas
- ✅ Ver mis reservas
- ✅ Estados de reserva

### Recordatorios

- ✅ Crear recordatorios
- ✅ Marcar como completados
- ✅ Categorización por tipo

### UX/UI

- ✅ Animaciones fluidas
- ✅ Loading states profesionales
- ✅ Página 404 personalizada
- ✅ Notificaciones toast

---

## 🎨 Personalización de Colores

Los colores del tema se pueden personalizar en `src/index.css`:

```css
--primary: 142 76% 36%; /* Verde esmeralda */
--secondary: 199 89% 48%; /* Azul cielo */
--accent: 24 95% 53%; /* Coral cálido */
```

---

## 🚀 Próximas Funcionalidades

- [ ] Integración con backend real
- [ ] Pagos en línea
- [ ] Chat en tiempo real
- [ ] Notificaciones push
- [ ] Mapa interactivo
- [ ] Perfil de mascota con historial médico
- [ ] Sistema de valoraciones con fotos

---

## 📱 Demo

**URL de Demo:** [En desarrollo]

**Credenciales de prueba:**

- Email: cualquier email válido
- Contraseña: cualquier contraseña

---

## 👥 Autor

**Mateo**

- GitHub: [@zvMateo](https://github.com/zvMateo)

---

## 📄 Licencia

MIT License

---

## 🙏 Agradecimientos

- [shadcn/ui](https://ui.shadcn.com/) - Por los componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - Por el framework de estilos
- [Lucide](https://lucide.dev/) - Por los iconos

---

<div align="center">
  <p>Hecho con ❤️ para las mascotas de Villa del Rosario</p>
  <p>🐾 PetVilla - Cuidando a quienes más amamos 🐾</p>
</div>
