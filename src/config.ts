// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Daniel Serrano";
export const SITE_DESCRIPTION =
  "¡Bienvenido a mi blog!";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Daniel Serrano";
export const SITE_SECONDARY_TITLE = "💻 Full Stack, Express, React, MongoDB 💻";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
