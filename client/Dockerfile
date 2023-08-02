# For the Next.js app in development
FROM node:18-alpine
WORKDIR /app/client
COPY ./package*.json ./
RUN npm install
COPY ./ .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# For the Next.js app in build
FROM node:18-alpine as builder
WORKDIR /var/www/j2911realty/client
COPY ./package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# For serving the built app
FROM node:18-alpine
WORKDIR /var/www/j2911realty/client

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the .next and public directories from the builder stage
COPY --from=builder /var/www/j2911realty/client/.next ./.next
COPY --from=builder /var/www/j2911realty/client/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
