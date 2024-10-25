# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## encunciado

Crear una apicacion para buscar peliculas
APi a usa
https://www.omdbapi.com/
https://www.omdbapi.com/?apikey=421251e&s=avengers
API_KEY: 421251e

sin resultados https://www.omdbapi.com/?apikey=421251e&s=avengersdidnddnd

Requerimiento
necesita mostrar un input para buscar la pelicula y un boton para buscar
lista las peliculas encontradas y muesta el titulo anio y poster
has que las pelicula se muestren en un grid responsivo

priema iteraccion
evitar que se haga la misma busqueda dos veces seguidas
has que la busqueda se haga automaticamente al escribir
evita que s ehaga la busqueda continuamente al escribir (debounce)

Pasos

1. npm create vite@latest
2. poner el nombre
3. ingresar a la carpeta y despues generar un npm i
4. limpiar el proyecto
5. Crear el linter
6. Framework class lest se estila un poco la pagina Water.css
7. componetizar y crear los custom hooks
8. comenzar con los formularios nuevo hook useRef
   es un hook referencia mutable persiste en toda la aplicacion
