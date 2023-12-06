# Use a base image
FROM node:16-alpine

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3333  
# Updated port to 3333

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only necessary files for dependency installation
COPY package*.json ./
COPY ecosystem.config.js ./  
# Copy PM2 ecosystem file

# Install app dependencies including PM2 using npm
RUN npm install

# Copy the entire application
COPY . .

# Expose the port that your API runs on
EXPOSE $PORT

# Specify the command to run your API using PM2 from the local node_modules
CMD ["./node_modules/.bin/pm2-runtime", "start", "ecosystem.config.js"]
