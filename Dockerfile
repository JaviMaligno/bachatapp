# Use the official Node.js LTS image as the base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Install pnpm globally first
RUN npm install -g pnpm

# Copy package.json AND the lock file
COPY package.json pnpm-lock.yaml ./

# Install dependencies using the lock file
# Use --frozen-lockfile for deterministic builds in CI/Docker
# Add -ddd for maximum verbose logging
RUN pnpm install --frozen-lockfile -ddd

# Copy the rest of the application files
COPY . .

# Expose the Vite dev server port
EXPOSE 3000

# Start the Vite development server
CMD ["pnpm", "run", "dev", "--", "--host"]