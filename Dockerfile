# Etapa 1: Builder - solo producción
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

# Etapa 2: Imagen final liviana
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3021

CMD ["node", "src/app.js"]
