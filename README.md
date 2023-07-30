# AVE Project Repository

Este repositorio consta de tres proyectos interrelacionados, dos aplicaciones front-end hechas con React y un back-end desarrollado con Node.js y Express. A continuación, se detallan los proyectos:

## 1. Pokemon App

Este es un proyecto front-end simple desarrollado con React. Se comunica con la [PokeAPI](https://pokeapi.co/) y permite a los usuarios buscar pokémon por su nombre o ID. La búsqueda devuelve una imagen del pokémon junto con algunos detalles. 

Para poner en marcha este proyecto, navegue hasta el directorio del proyecto y ejecute el comando `npm start`.

## 2. Project AVE Back-end

Este back-end se compone de dos módulos: uno para las validaciones y cálculos y otro exclusivo para las consultas de pokémon. Se han creado pruebas para los servicios y controladores para facilitar la verificación de funcionalidad, ya sea desde el navegador o utilizando herramientas como Postman.

Las URLs de ejemplo para los controladores son:

- Validations:
  - http://localhost:3000/validation/multiply/5/-2
  - http://localhost:3000/validation/validate-password/A1b2C3d4!aBcD5@E6F
  - http://localhost:3000/validation/number/1,15,785621,888,5252,3

- Pokemon:
  - http://localhost:3000/pokemon/type/fire
  - http://localhost:3000/pokemon/types/fire,water
  - http://localhost:3000/pokemon/number/Dugtrio
  - http://localhost:3000/pokemon/stats/95
  - http://localhost:3000/pokemon/order/name/15,62,3
  - http://localhost:3000/pokemon/checktype/1/fire

Para mayor comodidad, los datos se pasan a través de parámetros y se gestionan desde el back-end. Puede iniciar el servicio en el puerto 3000 ejecutando `npm run start`.

## 3. Validation App

Este es otro proyecto front-end simple que proporciona un campo de entrada para que los usuarios escriban una contraseña. La aplicación se comunica con el back-end, por lo que es esencial que el servicio del back-end esté funcionando en el puerto 3000. A medida que se introducen cambios en la contraseña, la aplicación valida la entrada según varias condiciones.

Para iniciar este proyecto, navegue hasta el directorio del proyecto y ejecute el comando `npm start`.

Por favor, asegúrese de tener instalado Node.js y npm para poder ejecutar estos proyectos correctamente.
