FROM node:18-alpine
WORKDIR /app
COPY package.json app.js ./
CMD ["node", "app.js"]