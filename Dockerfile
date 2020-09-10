FROM node:alpine

WORKDIR /usr/src/chronos_schemas

COPY package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 4193

CMD ["npm", "start"]