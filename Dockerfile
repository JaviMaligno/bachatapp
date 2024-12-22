# Use the official Node.js LTS image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Expose the Vite dev server port
EXPOSE 3000

# Start the Vite development server
CMD ["pnpm", "run", "dev", "--", "--host"]