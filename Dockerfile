#BUILD

FROM node:14-alpine as build-step

RUN mkdir -p /picturam

WORKDIR /picturam

COPY package.json /picturam

RUN npm install

COPY . /picturam

RUN npm run build:ep:pre

#SERVE

FROM nginx:1.17.1-alpine
	
COPY --from=build-step /picturam/dist /usr/share/nginx/html