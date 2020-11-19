FROM node:12-alpine
WORKDIR /usr/src
COPY . .
RUN npm install --registry=https://registry.npm.taobao.org

CMD ["node", "./app.js"]