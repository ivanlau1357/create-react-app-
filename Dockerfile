FROM node:14.9-slim

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN cd /app \
    && apt-get update \
    && yarn install

EXPOSE 3000

COPY . /app

CMD ["npm", "run", "start"]