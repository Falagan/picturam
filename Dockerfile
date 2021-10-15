#BUILD

FROM node:14-alpine as build-step

RUN mkdir -p /project

WORKDIR /project

COPY package.json /project

RUN npm install

COPY . /project

RUN npm run build:ep:pre

#SERVE

FROM nginx:1.17.1-alpine
	
COPY --from=build-step /project/dist/apps/web-edelpoint /usr/share/nginx/html