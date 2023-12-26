FROM node:latest

WORKDIR /home/projects/
COPY . .
RUN npm install
RUN npm install -g nodemon
