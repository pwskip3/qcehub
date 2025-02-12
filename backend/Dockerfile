# Use an optimized Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy backend source files
COPY src ./src

# Expose API port
EXPOSE 3001

# Define environment variables
ENV NODE_ENV=production

# Start backend server
CMD ["node", "src/server.js"]
