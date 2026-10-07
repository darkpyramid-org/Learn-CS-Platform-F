# Manetho Architecture

## Overview

Manetho is a standalone Angular 17+ application with a features-based folder structure.

## Layers

### 1. Features Layer (`src/app/features/`)
Independent modules for major features:
- `home/` - Landing page
- `articles/` - Article listing & detail
- `pharaohs/` - Pharaoh archive
- `sites/` - Archaeological sites
- `timeline/` - Historical timeline
- `categories/` - Category filtering
- `search/` - Full-text search
- `about/` - Editorial philosophy

Each feature is standalone and can be lazy-loaded.

### 2. Core Layer (`src/app/core/`)
Business logic and data:
- `services/` - ArticleService, PharaohService, SiteService, SearchService, SeoService
- `models/` - TypeScript interfaces (Article, Pharaoh, ArchaeologicalSite, etc.)
- `data/` - Seed data (articles.ts, pharaohs.ts, sites.ts, timeline.ts)

### 3. Shared Layer (`src/app/shared/`)
Reusable components:
- ArticleCard
- PharaohCard
- SiteCard

### 4. Global Components (`src/app/components/`)
- NavbarComponent
- FooterComponent

## Data Flow

```
Component
   ↓
Service (ArticleService, etc.)
   ↓
Data (Seed data in-memory)
   ↓
RxJS Observable
   ↓
Component displays
```

## Services

### ArticleService
- `getAllArticles()` - Get all articles
- `getArticleBySlug(slug)` - Get single article
- `getLatestArticles(limit)` - Get recent articles
- `getArticlesByCategory(category)` - Filter by category
- `getRelatedArticles(slug, limit)` - Get related articles

### SearchService
- `search(query)` - Full-text search
- `getRecentSearches()` - Get search history
- `addRecentSearch(query)` - Save to history

### SeoService
- `updateMeta(metadata)` - Update page meta
- `addJsonLd(data)` - Add structured data
- `createArticleSchema()` - Generate article schema

## Routing

All routes defined in `src/app/app.routes.ts`:
- `/` - Home
- `/articles` - Article list
- `/articles/:slug` - Article detail
- `/categories/:slug` - Category page
- `/pharaohs` - Pharaoh list
- `/pharaohs/:slug` - Pharaoh detail
- `/sites` - Site list
- `/sites/:slug` - Site detail
- `/timeline` - Timeline
- `/search` - Search page
- `/about` - About page

## Styling

- **Framework** - Tailwind CSS 4
- **Dark Mode** - Supported via `dark:` classes
- **Typography** - Cormorant (serif), Inter (sans), Playfair (display)
- **Colors** - Charcoal, Ivory, Gold, Lapis

## State Management

Uses RxJS services for state. No external state management library needed for this scope.

Future: Can integrate with NgRx or Akita if needed.

## Performance

- Standalone components (no NgModules)
- Tree-shaking friendly
- Lazy loading ready
- Image optimization
- CSS/JS minification on build
