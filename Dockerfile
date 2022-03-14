FROM node:17.3

WORKDIR /home/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN yarn install

CMD ["yarn", "start"]