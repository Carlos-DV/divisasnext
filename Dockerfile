# Base image
FROM node:16.15-alpine3.14

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from current directory to app directory
COPY . .

# Build Next.js app
RUN npm run build

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose port 3000
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]