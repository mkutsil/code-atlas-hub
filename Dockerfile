FROM node:18

# Встановлюємо необхідні залежності
RUN apt-get update && apt-get install -y chromium

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build:prod

# Встановлюємо змінну середовища для Loki
ENV CHROME_PATH=/usr/bin/chromium

EXPOSE 6006
CMD ["npx", "http-server", "./storybook-static", "-p", "6006"]
