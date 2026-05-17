FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci && npm install sharp

COPY . .
RUN npm run build

# Runner: nginx serves static assets, Next.js handles everything else
FROM node:18-alpine AS runner
RUN apk add --no-cache nginx libc6-compat
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001
ENV HOSTNAME=127.0.0.1
ENV NEXT_TELEMETRY_DISABLED=1

# Copy built app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# nginx config: serve /_next/static/ from disk, proxy rest to Next.js
RUN printf 'server {\n\
    listen 3000;\n\
    location /_next/static/ {\n\
        alias /app/.next/static/;\n\
        expires 1y;\n\
        add_header Cache-Control "public, immutable";\n\
    }\n\
    location / {\n\
        proxy_pass http://127.0.0.1:3001;\n\
        proxy_http_version 1.1;\n\
        proxy_set_header Host $host;\n\
        proxy_set_header X-Real-IP $remote_addr;\n\
        proxy_cache_bypass $http_upgrade;\n\
        add_header Cache-Control "no-store, no-cache";\n\
    }\n\
}\n' > /etc/nginx/http.d/default.conf

EXPOSE 3000

# Start nginx and Next.js together
CMD nginx && npm start
