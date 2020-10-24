# run docker build dist/. -file Dockerfile
FROM nginx:latest
COPY .  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
