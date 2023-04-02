# Base image
FROM node:16-alpine3.11

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

EXPOSE 3000

# Build the app
RUN npm run build

# Serve the app
CMD ["npm", "run", "preview"]
