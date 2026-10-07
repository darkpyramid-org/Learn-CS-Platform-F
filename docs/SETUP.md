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

# Output directory: dist/manetho/browser
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

## Deployment

### Vercel (Recommended)

**Option 1: Deploy from CLI**
```bash
npm install -g vercel
vercel deploy
```

**Option 2: Connect GitHub**
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import this repository
4. Vercel automatically builds and deploys on push

### Docker

```bash
docker build -t manetho .
docker run -p 80:80 manetho

# Or use docker-compose
docker-compose up
```

### Other Static Hosting

Deploy `dist/manetho/browser` folder to:
- AWS S3 + CloudFront
- Firebase Hosting
- GitHub Pages
- Any static hosting provider
