FROM node:16-alpine

WORKDIR .

COPY public/ public
COPY src/ src
COPY package.json package.json


RUN npm install

CMD ["npm", "start"]