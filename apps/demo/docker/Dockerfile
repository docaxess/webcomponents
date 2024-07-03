FROM node:22-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run nx run demo:build:production

FROM node:22-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/demo ./
CMD node server/server.mjs
EXPOSE 4000
