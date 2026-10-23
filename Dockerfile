FROM node:24.22.1-bookworm-slim
WORKDIR /app
RUN npm install --global --ignore-scripts pnpm@10.34.5
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "dev", "--", "--host"]
