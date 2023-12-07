# Use a smaller Node.js base image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only necessary files for dependency installation
COPY package*.json ./

# Install app dependencies including PM2 using npm
RUN npm install

# Copy the entire application
COPY . .

# Expose the port that your API runs on
EXPOSE 3232


# Specify the command to run your API using npm start
CMD ["npm", "run", "start"]
