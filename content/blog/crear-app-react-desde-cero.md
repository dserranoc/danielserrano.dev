---
external: false
title: "⚛️ Como crear un proyecto React desde cero con TypeScript, TailwindCSS y ESLint usando Vite"
description: "Tutorial para crear un proyecto Vite con React, TypeScript, TailwindCSS y ESLint."
date: 2023-03-20
---

Hola a todos y bienvenidos a un nuevo post. En esta ocasión vamos a crear un proyecto React desde cero con TypeScript, TailwindCSS y ESLint.

## Creación del proyecto con Vite

Para crear el proyecto vamos a usar [Vite](https://vitejs.dev/), un generador de proyectos que nos permite crear proyectos Vanilla, React, Preact, Vue, Svelte y Lit con un solo comando, además de sus versiones con TypeScript.

Necesitaremos tener instalado Node.js y un gestor de paquetes como npm (puedes usar otro pero en el tutorial usaré npm).

Para instalar Vite, ejecutaremos el siguiente comando:

```bash
npm create vite@latest
```

El asistente nos pedirá que respondamos a unas preguntas para crear el proyecto.

```bash
? Project name: › vite-project
```

Introducimos el nombre del proyecto.

```bash
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Others
```

Seleccionamos el framework que queremos usar. En nuestro caso, vamos a usar "React".

```bash
? Select a variant: › - Use arrow-keys. Return to submit.
    JavaScript
    TypeScript
    JavaScript + SWC
❯   TypeScript + SWC
```

Seleccionamos la variante que queremos usar. En nuestro caso, vamos a usar "TypeScript + SWC" (SWC es un compilador y empaquetador de JavaScript mucho más rápido que Babel).

Acto seguido Vite nos generará el proyecto y nos pedirá que entremos a la carpeta del proyecto e instalemos las dependencias.

## Instalación y configuración de ESLint

ESLint es una herramienta que nos permite analizar el código JavaScript para encontrar potenciales problemas y errores. Además, nos permite configurar reglas para que el código siga un estilo determinado.

Para sacar el máximo potencial de ESLint, necesitaremos descargarnos la extensión de ESLint para nuestro editor de código. En mi caso, usaré Visual Studio Code, por lo que descargaremos la extensión [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Para instalar ESLint en nuestro proyecto, instalaremos ESLint como dependencia de desarrollo:

```bash
npm install -D eslint
```
Ahora que hemos instalado ESLint, vamos a crear un fichero de configuración para que ESLint sepa cómo analizar nuestro código. Para ello usaremos el asistente oficial de ESLint para crear un fichero de configuración.

```bash
npm init @eslint/config
```

Nos hará una serie de preguntas a las que contestaremos dependiendo de nuestras preferencias. Podéis seleccionar las opciones que queráis, yo usaré las siguientes.

```bash
? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
▸ To check syntax, find problems, and enforce code style
```

Seleccionamos "To check syntax, find problems, and enforce code style" porque queremos que ESLint nos ayude a encontrar problemas y errores en nuestro código, además de que nos ayude a mantener un estilo de código consistente.


```bash
? What type of modules does your project use? …
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

Seleccionamos "JavaScript modules (import/export)" porque nuestro proyecto usamos EcmaScript Modules.

```bash
? Which framework does your project use? …
▸ React
  Vue.js
  None of these
```

Seleccionamos "React" porque nuestro proyecto usa React.


```bash
? Does your project use TypeScript? ‣ No / Yes
```

Seleccionamos "Yes" porque nuestro proyecto usa TypeScript.

```bash
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node
```

Por defecto, está seleccionado "Browser" (React corre en el navegador), así que no tenemos que hacer nada.

```bash
? How would you like to define a style for your project? …
▸ Use a popular style guide
  Answer questions about your style
```

Seleccionamos "Use a popular style guide" porque queremos usar una guía de estilo popular.

```bash
? Which style guide do you want to follow? …
▸ Standard: https://github.com/standard/eslint-config-standard-with-typescript
  XO: https://github.com/xojs/eslint-config-xo-typescript
```

Seleccionamos "Standard" porque es la guía de estilo que más me gusta.

```bash
? What format do you want your config file to be in? …
▸ JavaScript
  YAML
  JSON
```

Seleccionamos "JavaScript" porque así podemos estilar y añadir comentarios al fichero de configuración.

```bash
? Would you like to install them now? ‣ No / Yes
```

Seleccionamos "Yes" para que ESLint instale las dependencias y cree el fichero de configuración.

```bash
? Which package manager do you want to use? …
▸ npm
  yarn
  pnpm
```

Finalmente seleccionamos "npm" porque es el gestor de paquetes que estamos usando (selecciona el que hayas usado).

Una vez terminado el asistente, ESLint nos habrá creado un fichero de configuración en la raíz del proyecto. En nuestro caso, se llamará `.eslintrc.cjs` y tendrá el siguiente contenido:
  
```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
```


Ya hemos instalado ESLint y hemos creado el fichero de configuración. Si ahora vamos al fichero `App.tsx` dentro de la carpeta `src`, no parece que haya pasado nada. Esto es porque tenemos que hacer un paso extra para que ESLint funcione con TypeScript.

Necesitamos decirle a ESLint donde está la configuración de TypeScript. Para ello, modificaremos el fichero de configuración de la siguiente manera:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json' // AÑADIMOS ESTA LÍNEA
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
```

Ahora si que deberíamos ver los errores de ESLint en nuestro editor de código. Si no es así, reinicia el editor de código y vuelve a abrir el fichero `App.tsx`.

Verás que hay un error que se repite mucho: **'React' must be in scope when using JSX**. Esto es porque no hemos importado React en los ficheros `.tsx`. Pero resulta que con Vite no es necesario, así que vamos a deshabilitar esa regla en el fichero de configuración de ESLint.

```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off' // DESHABILITAMOS ESTA REGLA
  }
}
```

Y listo, ahora ese error ya no nos debería molestar más.

## Instalación de TailwindCSS

Ahora que ya tenemos nuestro proyecto configurado, vamos a instalar TailwindCSS. Para ello instalaremos las siguientes dependencias:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Una vez instaladas las dependencias, vamos a crear un fichero de configuración de TailwindCSS. Para ello, ejecutaremos el siguiente comando:

```bash
npx tailwindcss init -p
```

Esto nos creará dos ficheros, `tailwind.config.cjs` y `postcss.config.cjs`. El primero es el fichero de configuración de TailwindCSS y el segundo es el fichero de configuración de PostCSS. Nosotros solo tenemos que modificar el fichero de configuración de TailwindCSS.

Por defecto, el fichero de configuración de TailwindCSS tendrá el siguiente contenido:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Y lo vamos a modificar para que se vea así:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ], // MODIFICAMOS ESTE BLOQUE
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Finalmente, abrimos el fichero `index.css` y añadimos al principio del todo el siguiente código:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Y listo, ya tenemos TailwindCSS instalado y configurado.

## Sorpresa final

Si has llegado hasta aquí, déjame agradecertelo. He creado un repositorio plantilla de Vite con React, TypeScript, TailwindCSS y ESLint ya configurados. Puedes descargarlo y usarlo como base para tus proyectos.

Ejecuta el siguiente comando para descargar el repositorio:

```bash
npx degit dserranoc/vite-reactts18-eslint-tailwindcss NOMBRE-DEL-PROYECTO
```

Entra a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

Y por último, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Y eso es todo. Espero que te haya gustado el tutorial y que te haya servido de gran ayuda. Nos vemos en el siguiente post 😁.