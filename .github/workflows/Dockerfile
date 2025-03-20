FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod
EXPOSE 6006
CMD ["npx", "http-server", "./storybook-static", "-p", "6006"]
