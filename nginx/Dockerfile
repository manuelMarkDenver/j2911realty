# Use the official Nginx base image
FROM nginx:latest

# Install nano using apk package manager
RUN apt-get update && apt-get install -y nano

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Start nginx in the foreground to play nicely with Docker.
CMD ["nginx", "-g", "daemon off;"]