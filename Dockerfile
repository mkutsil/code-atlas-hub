FROM node:18

# Встановлюємо необхідні залежності
RUN apt-get update && apt-get install -y chromium

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build:prod

# Встановлюємо змінну середовища для Loki
ENV CHROME_PATH=/usr/bin/chromium
ENV STORYBOOK_PORT=6006

EXPOSE 6006

CMD ["sh", "-c", "npx http-server ./storybook-static -p $STORYBOOK_PORT & sleep 5 && npm run test:ui:ci"]
