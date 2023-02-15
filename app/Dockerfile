FROM node:16.19.0-alpine3.17

WORKDIR /app

RUN npm i @google-cloud/storage
RUN npm i gcp-metadata@5.0.1
RUN npm ls gcp-metadata

COPY index.js .

CMD ["node", "index.js"]
