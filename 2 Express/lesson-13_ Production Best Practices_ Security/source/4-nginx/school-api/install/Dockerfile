FROM node:10.16.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
RUN npm install --production

EXPOSE 3000
