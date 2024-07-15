


#  ***Task Manager***

Descripción:

El Task Manager es una aplicación web completa diseñada para ayudar a los usuarios a gestionar sus tareas de manera eficiente. Esta herramienta ofrece funcionalidades esenciales como la creación, edición, eliminación y visualización de tareas, todo dentro de un entorno seguro y amigable para el usuario.

## **Características Principales**:
- **Inicio y Registro de Sesión**:

- **Registro de Usuarios**: Los nuevos usuarios pueden crear una cuenta proporcionando su información básica.
- **Inicio de Sesión**: Los usuarios registrados pueden iniciar sesión con sus credenciales para acceder a sus tareas.
- **Autenticación Segura**: Uso de cifrado de contraseñas para garantizar la seguridad de la información del usuario.

## **Gestión de Tareas**:

- **Añadir Tareas**: Los usuarios pueden agregar nuevas tareas con detalles como título, descripción y fecha de vencimiento.
- **Editar Tareas**: Posibilidad de modificar los detalles de las tareas existentes.
- **Eliminar Tareas**: Los usuarios pueden eliminar las tareas que ya no necesiten.
- **Visualización de Tareas**: Interfaz clara y organizada para ver todas las tareas pendientes y completadas.
  
## **Backend Conectado a MongoDB#**:

- **Base de Datos NoSQL**: Uso de MongoDB para almacenar la información de usuarios y tareas de manera eficiente.
- **Operaciones CRUD**: Implementación completa de operaciones Create, Read, Update y Delete en la base de datos.
Seguridad:

- **Cifrado de Contraseñas**: Implementación de bcrypt para cifrar las contraseñas de los usuarios antes de almacenarlas en la base de datos.
- **Autenticación JWT**: Uso de JSON Web Tokens para asegurar las sesiones de los usuarios.
  
## **Tecnologías Utilizadas**:
- **Frontend: HTML5, CSS3, JavaScript,Tailwindcss
Frameworks/Librerías: React.js**

- **Backend: Node.js, Express.js
Base de Datos: MongoDB, Mongoose ,Bcrypt para cifrado de contraseñas
JSON Web Tokens (JWT) para la autenticación**

## **Configuración del proyecto**

1. **Clona este repositorio en tu máquina local.**
2. **Instala las dependencias del proyecto** ejecutando `npm install`.
3. **Configura las variables de entorno**.
4. **Inicia el servidor** ejecutando `npm run dev`.
