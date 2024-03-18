# Используем базовый образ Node.js
FROM node:latest

# Установка необходимых зависимостей
RUN apt-get update \
    && apt-get install -yq \
        libgtk-3-0 \
        libgbm-dev \
        libnss3 \
        libnspr4 \
        libasound2 \
    && rm -rf /var/lib/apt/lists/*

# Создание рабочей директории в контейнере
WORKDIR /app

# Копируем файлы проекта в контейнер
COPY . .

# Установка зависимостей и установка playwright
RUN npm install && npx playwright install

# Запуск тестов smoke
CMD ["npm", "run", "smoke"]



