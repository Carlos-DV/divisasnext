# Selecciona la imagen base
FROM node:16.15-alpine3.14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos fuente al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000 para acceder a la aplicación
EXPOSE 3000

# Ejecuta el servidor de desarrollo de Next.js
CMD ["npm", "run", "dev"]