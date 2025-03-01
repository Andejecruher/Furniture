# Descripción del Proyecto

Este proyecto es una página web para una tienda de muebles desarrollada con Astro. La finalidad de la web es ofrecer una experiencia rápida, optimizada y moderna para la presentación de catálogos de muebles, permitiendo a los usuarios explorar diferentes categorías de productos con un diseño limpio y minimalista.

Astro se ha utilizado para garantizar un rendimiento excepcional, optimizando la carga de páginas estáticas sin comprometer la interactividad y la experiencia de usuario.

# Tecnologías Utilizadas

- Astro: Framework de generación de sitios estáticos y componentes modernos.

- Tailwind CSS: Para estilos y diseño responsivo.

- TypeScript: Para tipado seguro en el desarrollo.

- Markdown / MDX: Para la gestión de contenido dinámico.

- Integraciones con API: (Opcional) Para gestión de inventario, pedidos o contacto.

# Estructura del Proyecto

Dentro de tu proyecto de Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos .astro o .md en el directorio src/pages/. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial sobre src/components/, pero es donde normalmente colocamos los componentes de Astro, React, Vue, Svelte o Preact.

Cualquier recurso estático, como imágenes, se puede colocar en el directorio public/.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, a través de una terminal:

| Comando                   | Accion                                                     |
| :------------------------ | :--------------------------------------------------------- |
| `npm install`             | Instalar dependencias                                      |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`       |
| `npm run build`           | Compila tu sitio de producción en `./dist/`                |
| `npm run preview`         | Previsualiza tu compilación localmente antes de desplegar. |
| `npm run astro ...`       | Ejecuta comandos de la CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda con el uso de la CLI de Astro                  |
