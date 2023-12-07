# Use a smaller Node.js base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only necessary files for dependency installation
COPY package*.json ./

# Install app dependencies including PM2 using npm
RUN npm install

# Copy the entire application
COPY . .

# Expose the port that your API runs on
EXPOSE 3333

# Create a non-root user
RUN addgroup -g 1001 nodejs && \
    adduser -u 1001 -G nodejs -s /bin/sh -D nodejs

# Switch to non-root user
USER nodejs

# Specify the command to run your API using npm start
CMD ["npm", "run", "start"]
