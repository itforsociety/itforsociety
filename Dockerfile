# Build stage
FROM node:14 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source
COPY . .

# Build Angular app
RUN npm run build -- --prod

# Runtime stage
FROM node:14-slim

WORKDIR /app

# Install express for serving the app
RUN npm install express

# Copy built application from builder
COPY --from=builder /app/dist /app/dist

# Create simple Express server
RUN cat > /app/server.js << 'EOF'
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist/ITforSociety')));

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ITforSociety/index.html'));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
EOF

EXPOSE 4200

CMD ["node", "server.js"]
