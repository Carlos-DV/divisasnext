FROM node:16.15-alpine3.14

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ ./
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "start"]