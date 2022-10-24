FROM node:16-alpine

WORKDIR /opt/app
ADD . .

RUN npm install && \
    npm run build

ENTRYPOINT ["npm", "start"]
