#Ejecutar el proyecto

## Correr en dev
0. Version Node ^20
1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Ejecutar en modo desarrollo ```npm run dev```

## Crear imagen y ejecutar
1. Clonar repositorio
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Crear imagen ```docker build -t disney-clone .```
4. Correr contenedor ```docker container run -dp 3000:3000 disney-clone```
5. Entrar al puerto 3000 

