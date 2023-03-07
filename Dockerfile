# base image
FROM node:12.2.0-alpine

ENV REACT_APP_REDUX_DEVTOOLS_DISABLED=true
ENV REACT_APP_VERSION = v0.0.12
ENV GENERATE_SOURCEMAP = false
ADD package.json .
# ADD package-lock.json .

RUN npm install --loglevel verbose

COPY . .

EXPOSE 3000

RUN npm run build

FROM nginx:1.14-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /build /usr/share/tintometrico
