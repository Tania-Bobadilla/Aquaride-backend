# Proyecto 5: Ecommerce (backend)

## Introducción

Este documento presenta la arquitectura del backend del ecommerce ficticio de la marca "Aquaride" que se especializa en la venta de ropa, equipo y accesorios de surf.

## Componentes principales

**Controladores:** permiten llamar y leer informacion desde la base de datos para luego utilizarla en el frontend, asi como crear, actualizar y eliminar datos almacenados ahí

**Rutas:** conntienen endpoints que se conectan a las diferentes funciones de los controladores (GET, POST, PUT y DELETE)

**Modelos:** hechos con Mongoose, se conectan a las diferentes colecciones dentro de la base de datos

**Middlewares:** controlan la autenticacion del usuario (otorgación de un token) y permiten que la aplicación pueda leer objetos creados con JSON

## Tecnologías utilizadas

**Framework:** Express.js 4.18.2

**Entorno de ejecución:** Node.js 20.11.0

## Librerías utilizadas

cors: 2.8.5

dotenv: 16.3.1

express jwt: 8.4.1

jsonwebtoken: 9.0.2

mongodb: 6.3.0

mongoose: 8.0.2

## Seguridad: JSON Web Token

Para verificar la autenticación del usuario se hace una consulta con el sitio web para verficar esta está efectivamente registrado enviado su nombre y contraseña a traves del método POST a la base de datos. Si el usuario existe, se la da acceso y un token de seguimiento.

## Diagrama de la arquitectura del frontend y backend  

![AAAA](https://github.com/Tania-Bobadilla/Aquaride-backend/assets/135383254/bb3831a2-041e-45f7-adfd-2b593c0633b7)

## Miembros del proyecto

Tania Bobadilla, Ignacio Gómez, Fernanda Ramirez y Rodrigo Velásquez

## Link del frontend

**Página web:** https://fabulous-genie-b3ac69.netlify.app/

**Repositorio:** https://github.com/Tania-Bobadilla/Aquaride-frontend/tree/master

