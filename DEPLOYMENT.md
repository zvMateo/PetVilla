# 🚀 GUÍA DE DEPLOYMENT RÁPIDO

## Opción 1: Vercel (Recomendado - 2 minutos)

1. **Ir a [vercel.com](https://vercel.com)**
2. **Conectar con GitHub**
3. **Importar repositorio PetVilla**
4. **Deploy automático** ✨

Configuración automática detectada en `vercel.json`

---

## Opción 2: Netlify (Alternativa - 2 minutos)

1. **Ir a [netlify.com](https://netlify.com)**
2. **Conectar con GitHub**
3. **Seleccionar repositorio PetVilla**
4. **Deploy automático** ✨

Configuración automática detectada en `netlify.toml`

---

## Opción 3: GitHub Pages (Manual)

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar scripts en package.json:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# 3. Modificar vite.config.ts agregar:
base: '/PetVilla/'

# 4. Deploy
npm run deploy
```

---

## Variables de Entorno (Futuro)

Crear archivo `.env` para producción:

```env
VITE_API_URL=https://api.petvilla.com
VITE_ANALYTICS_ID=tu-id-analytics
```

---

## Verificación Post-Deploy

✅ Verificar que carga la página de inicio
✅ Probar el login
✅ Navegar entre páginas
✅ Verificar que los estilos cargan correctamente
✅ Probar en mobile (DevTools)

---

## URLs de ejemplo:

- **Vercel**: `https://petvilla.vercel.app`
- **Netlify**: `https://petvilla.netlify.app`
- **GitHub Pages**: `https://zvmateo.github.io/PetVilla`

---

## Consejos para la presentación:

1. **Abrir en modo incógnito** para cache limpio
2. **Tener el sitio abierto ANTES** de la presentación
3. **Screenshot de respaldo** por si falla internet
4. **Demostrar en mobile** (F12 > Toggle device toolbar)

¡Éxito en tu presentación! 🎉
