# FROM node:16.15-alpine3.14
# WORKDIR /usr/src/app
# COPY . .
# RUN npm install 
# CMD ["npm","run","dev"]

FROM node:16.15-alpine3.14 as builder
WORKDIR /my-space

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16.15-alpine3.14 as runner
WORKDIR /my-space
COPY --from=builder /my-space/package.json .
COPY --from=builder /my-space/package-lock.json .
COPY --from=builder /my-space/next.config.js ./
COPY --from=builder /my-space/public ./public
COPY --from=builder /my-space/.next/standalone ./
COPY --from=builder /my-space/.next/static ./.next/static
EXPOSE 3000
CMD ["npm", "start"]