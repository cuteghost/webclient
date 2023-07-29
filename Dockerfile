# Stage 1: Build the Angular app
FROM node:18 as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app (adjust the command based on your specific Angular project)
RUN npm run build-prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:latest

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the previous stage to Nginx's default public directory
COPY --from=builder /usr/src/app/dist/webclient /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]