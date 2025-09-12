FROM node:22-alpine


WORKDIR /app


COPY package*.json ./


RUN npm ci --only=production --ignore-scripts


COPY . .


RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser


EXPOSE 5000


ENV NODE_ENV=production

CMD ["node", "server.js"]
