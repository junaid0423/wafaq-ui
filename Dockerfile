FROM node:18.7.0 as build

WORKDIR /app
COPY package.json/ .
RUN npm install
COPY . .
RUN npm run prod

FROM nginx:1.19

COPY --from=build /app/dist/ui/ /usr/share/nginx/html/