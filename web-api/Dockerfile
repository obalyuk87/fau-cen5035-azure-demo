FROM node:14-alpine


WORKDIR /usr/src/app
 
COPY ./package.json ./
RUN npm install --no-warnings

COPY ./ .
COPY ./.env_docker ./.env

EXPOSE 443
CMD [ "npm", "start" ]