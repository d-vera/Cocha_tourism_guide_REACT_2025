# Guía Turística de Cochabamba - React + Tailwind CSS

Una aplicación web moderna de guía turística para Cochabamba, Bolivia, construida con React, Vite y Tailwind CSS.

## 🚀 Características

- **React 18** - Framework moderno de JavaScript
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Framework de CSS utility-first
- **React Router** - Navegación entre páginas
- **Responsive Design** - Diseño adaptable a todos los dispositivos

## 📋 Páginas

- **Inicio** - Información general sobre Cochabamba
- **Top 10 Lugares** - Los mejores lugares turísticos con carruseles de imágenes
- **Contáctanos** - Formulario de contacto
- **Pueblos** - Tabla con los 10 mejores pueblos para visitar

## 🛠️ Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:5173
```

## 📦 Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🎨 Tecnologías Utilizadas

- React 18.3.1
- React Router DOM 6.26.0
- Tailwind CSS 3.4.10
- Vite 5.4.2

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Carousel.jsx      # Componente de carrusel de imágenes
│   ├── Footer.jsx        # Pie de página
│   ├── Layout.jsx        # Layout principal
│   └── Navbar.jsx        # Barra de navegación
├── pages/
│   ├── Contact.jsx       # Página de contacto
│   ├── Home.jsx          # Página de inicio
│   ├── Pueblos.jsx       # Página de pueblos
│   └── TopPlaces.jsx     # Página de top 10 lugares
├── App.jsx               # Componente principal
├── main.jsx              # Punto de entrada
└── index.css             # Estilos globales con Tailwind
```

## 🖼️ Imágenes

Las imágenes se encuentran en la carpeta `public/images/`. Asegúrate de que todas las imágenes referenciadas en el código estén presentes.

## 📝 Notas

- El proyecto utiliza JavaScript (no TypeScript)
- Todas las rutas están configuradas con React Router
- El diseño es completamente responsive
- Los carruseles de imágenes tienen auto-play cada 3 segundos

## 👨‍💻 Desarrollo

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

© 2025 Hecho en Cocha. Todos los derechos reservados.
