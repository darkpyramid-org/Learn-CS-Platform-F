# Manetho Setup Guide

## Prerequisites
- Node.js 18+
- npm or yarn
- Git

## Installation

```bash
# Clone repository
git clone https://github.com/darkpyramid-org/Learn-CS-Platform-F.git
cd Learn-CS-Platform-F

# Install dependencies
npm install

# Start development server
ng serve

# Open browser
http://localhost:4200
```

## Build for Production

```bash
# Build optimized production bundle
ng build --configuration production

# Output directory: dist/
```

## Development

```bash
# Run development server with hot reload
ng serve

# Run tests
ng test

# Run linting
ng lint
```

## Project Structure

```
src/
├── app/
│   ├── features/        # Feature modules
│   ├── core/           # Services & models
│   ├── shared/         # Reusable components
│   └── components/     # Global navbar/footer
├── global_styles.css   # Global styles
└── index.html          # HTML template
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
API_URL=http://localhost:3000
ENVIRONMENT=development
```

## Deployment

### Docker
```bash
docker build -t manetho .
docker run -p 80:80 manetho
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### Other Hosts
Deploy `dist/` folder to any static hosting.
