FROM node:14
#USER root
ENV PORT=3002
WORKDIR /app/exop-public


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE $PORT

CMD ["sh", "launcher.sh"]