# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build -- --configuration production

# Production stage
FROM nginx:alpine
LABEL org.opencontainers.image.source="https://github.com/darkpyramid-org/Manetho-Blog-F"
COPY --from=builder /app/dist/demo/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
