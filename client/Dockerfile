# For the Next.js app in development
FROM node:18-alpine as dev
WORKDIR /var/www/j2911realty/client
COPY ./package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# For serving the built app
FROM node:18-alpine
WORKDIR /var/www/j2911realty/client
COPY --from=builder /var/www/j2911realty/client/package*.json ./
RUN npm install --omit=dev
COPY --from=builder /var/www/j2911realty/client/.static ./static
# COPY --from=builder /app/client/.next ./.next
EXPOSE 3000
CMD ["npm", "run", "start"]
