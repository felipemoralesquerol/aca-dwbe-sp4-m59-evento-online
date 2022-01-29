## Curso de Desarrollo Web Backend Acámica

#### Descripción

Adaptación de HTML básico con soporte previo de integración con Google, ahora auth vía Facebook!


#### Prerrequisitos tecnológicos:

- git (control de código fuente)
- Node.Js (server backend)
- MySQL Server Database (database)
- Redis Server (cache)

#### Entidades gestionadas:

- Usuarios


#### Módulos de Node.Js utilizados:

- "bcrypt": "^5.0.1",
- "chai": "^4.3.4",
- "dotenv": "^10.0.0",
- "express": "^4.17.1",
- "express-validator": "^6.12.2",
- "helmet": "^4.6.0",
- "jsonwebtoken": "^8.5.1",
- "mocha": "^9.1.2",
- "mongoose": "^6.0.8",
- "morgan": "^1.10.0",
- "mysql2": "^2.3.0",
- "node-fetch": "^2.6.3",
- "nodemon": "^2.0.13",
- "require-from-url": "^3.1.3",
- "sequelize": "^6.6.5",
- "swagger-jsdoc": "^6.1.0",
- "swagger-ui-express": "^4.1.6"

#### Instrucciones para gestionar auth vía Google

1. Acceder a https://developers.facebook.com/ y acceder con un usuario registrado en dicha plataforma.

2. Registarse como desarrollador en el link anterior.

3. Posteriormente Crear una aplicación de tipo Consumidor, con el nombre aca-dwbe-sp4-m59-evento-online, por ejemplo.

4. Luego añadir el producto correspondiente a nuestra aplicación, en este caso vamos a elegir "Inicio de sesión con Facebook". Para esto vamor a Configurar y seleccionamos la plataforma para ingresar, como por ejemplo web.

5. En la configuración web vamos a tener que configurar:

   a. URL del sitio web, por ejemplo http://localhost:5000
   
6. Luego copiar las credenciales desde la configuración de nuestra aplicación, en la solapa Información básica se puede copiar el Identificar de la aplicación y la clave secreta de la aplicación. Estos son las credenciales que vamos a estar utilizando en la app copiandolas en el archivo .env.

7. Ahora pasamos a descargar la librería passport para oauth.

   ```npm install passport-facebook```

8. Chequear y aplicar el código desde https://github.com/passport/express-4.x-facebook-examplea nuestro proyecto






#### Instrucciones de instalación:

1. Crear carpeta para su instalación
2. Ingresar a la carpeta creada y desde la consola ejecutar:
   `git clone https://github.com/felipemoralesquerol/aca-dwbe-sp4-m58-evento-online`
3. Ingresar a la carpeta aca-sprint1-project.
4. Ejecutar `npm install`.
5. Copiar el archivo .env.example a .env
6. Configurar las variables de entorno del archivo .env a su configuración
7. (opcional) Ejecutar script sql ubicado en carpeta sql que contiene las sentencias de creación de base de datos y tablas.
8. Chequear las dependencias utilizadas vía `npm-check`
9. Arrancar el servidor ejecutando `npm run dev`
10. Ejecución de test ejecutando `npm run test`
11. A disfrutar!!

#### Documentación de la aplicación vía PostMan:

- Descarga y ejecuta localmente la colección https://github.com/felipemoralesquerol/aca-dwbe-sp4-m58-evento-online/blob/master/api/postman/aca-dwbe-sp4-m58-evento-online.postman_collection.json

---

_Nota del autor:
Esta implementación fue desarrollada a titulo personal y solamente a los efectos de contar con una alternativa de la posible implementación de lo requerido.
Cualquier comentario será bienvenido!_
