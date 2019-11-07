FROM node:10-alpine

ADD . /app

WORKDIR /app

ENV PATH="/app/node_modules/.bin/:${PATH}"

RUN npm install

RUN npm run build

CMD ["npm", "start"]

EXPOSE 5000