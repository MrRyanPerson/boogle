FROM node:25-alpine3.23

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

RUN npm install pm2 -g

CMD ["pm2-runtime", "start", "build/index.js", "--name", "boogle", "--format", "json", "--output", "/app/logs/output.log", "--error", "/app/logs/error.log"]