# Manetho — Ancient Egypt Historical Blog

A premium digital publication exploring Ancient Egypt through history, archaeology, pharaohs, mythology, artifacts, discoveries, and historical research.

## Project Status
✅ **COMPLETE** — Fully transformed from Forge SaaS landing page to editorial publication

## Key Features

### Content Modules
- **Articles** - 20 editorial pieces on Ancient Egypt history and archaeology
- **Pharaohs** - 10 ruler profiles with dynasties, achievements, monuments
- **Archaeological Sites** - 8 major locations (Giza, Saqqara, Valley of the Kings, etc.)
- **Timeline** - 10 historical periods spanning 3000+ years
- **Categories** - 6 editorial categories (Civilization, Pharaohs, Archaeology, Mythology, Discoveries, Artifacts)
- **Search** - Full-text search across all content with recent history

### Reading Experience
- Reading progress bar with scroll tracking
- Bookmarks (localStorage-based favorites)
- Social sharing (Facebook, Twitter/X, WhatsApp, copy link)
- Dark mode support
- Author information cards
- Related articles suggestions
- Previous/next article navigation

### Technical Excellence
- **Responsive** - 360px to 1920px (mobile-first design)
- **Accessible** - WCAG AA compliant (semantic HTML, ARIA, keyboard navigation)
- **SEO** - Complete meta tags, Open Graph, JSON-LD schemas
- **Performance** - Optimized components, lazy loading

## Quick Start

```bash
npm install
ng serve              # Development server (http://localhost:4200)
ng build              # Production build
ng build --optimization  # Optimized production build
```

## Project Structure

```
src/app/
├── core/              # Shared services & data models
│   ├── models/       # TypeScript interfaces
│   ├── services/     # Business logic (article, pharaoh, site, search, seo)
│   └── data/         # Seed data
├── shared/           # Reusable components (cards, navbar, footer)
├── features/         # Feature modules
│   ├── home/         # Homepage
│   ├── articles/     # Article listing & detail
│   ├── categories/   # Category pages
│   ├── pharaohs/     # Pharaoh archive
│   ├── sites/        # Archaeological sites
│   ├── timeline/     # Historical timeline
│   ├── search/       # Search functionality
│   └── about/        # Editorial philosophy
├── components/       # Global navbar & footer
├── app.routes.ts     # Route configuration
└── app.component.ts  # Root layout
```

## Core Routes

| Route | Purpose |
|-------|---------|
| `/` | Homepage with featured article |
| `/articles` | Article listing with filters |
| `/articles/:slug` | Individual article |
| `/categories/:slug` | Articles by category |
| `/pharaohs` | Pharaoh archive |
| `/pharaohs/:slug` | Pharaoh profile |
| `/sites` | Archaeological sites |
| `/sites/:slug` | Site details |
| `/timeline` | Historical timeline |
| `/search` | Full-text search |
| `/about` | Editorial philosophy |

## Design System

### Colors
- **Charcoal** (#171512) - Primary text/backgrounds
- **Ivory** (#F4EFE5) - Light backgrounds
- **Gold** (#B08A3C) - Accents and highlights
- **Lapis** (#245B67) - Egyptian blue

### Typography
- **Display** - Playfair Display (headlines)
- **Serif** - Cormorant Garamond (editorial)
- **Sans** - Inter (UI elements)

### Responsive Breakpoints
- Mobile: 360px, 390px
- Tablet: 768px, 1024px
- Desktop: 1366px, 1920px

## Data Models

### Article
```typescript
{
  id, slug, title, subtitle, excerpt, content,
  coverImage, category, tags, author,
  publishedAt, updatedAt, readingTime,
  featured, sources, relatedArticles
}
```

### Pharaoh
```typescript
{
  id, slug, name, dynasty, period, reign,
  biography, achievements, monuments,
  family, image, relatedArticles
}
```

### ArchaeologicalSite
```typescript
{
  id, slug, name, location, period,
  significance, description, discoveries,
  monuments, timeline, images, relatedArticles
}
```

## Services

| Service | Purpose |
|---------|---------|
| `ArticleService` | Article CRUD & filtering |
| `PharaohService` | Pharaoh data & filtering |
| `SiteService` | Archaeological site data |
| `TimelineService` | Historical events & periods |
| `SearchService` | Full-text search & history |
| `SeoService` | Meta tags & structured data |

## What Was Removed from Original

- ✅ Pricing section (not a SaaS product)
- ✅ Testimonials (replaced with expert voices)
- ✅ Deployment metrics
- ✅ "Get Started" / "Sign in" buttons
- ✅ Fake company logos
- ✅ Developer platform messaging
- ✅ All Taiga UI dependencies
- ✅ SaaS-specific features

## What Was Added

- ✅ 20 editorial articles with metadata
- ✅ 10 pharaoh profiles with achievements
- ✅ 8 archaeological sites with galleries
- ✅ 20+ historical timeline events
- ✅ Search functionality with history
- ✅ Category-based filtering
- ✅ Reading experience tools (bookmarks, sharing, progress)
- ✅ SEO optimization (meta, OG, JSON-LD)
- ✅ Dark mode support
- ✅ Accessibility features (ARIA, keyboard navigation)

## Content Standards

All historical content follows scholarly standards:
- Distinguishes between fact, interpretation, and speculation
- Includes proper citations and sources
- Avoids fake statistics or fabricated claims
- Uses credible museum and academic references
- Explains uncertain or debated points clearly

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Mobile (Android)

## Deployment

The `dist/manetho/browser` folder from `ng build` is ready for deployment to:
- **Vercel** (recommended) - automatic deployments from GitHub
- Docker - containerized deployment
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting provider

## Future Enhancements

- Backend API integration
- User authentication & profiles
- Advanced search with filters
- Comments/discussion system
- Email newsletter (backend)
- Analytics & metrics
- PDF export
- Multi-language support

## Technical Stack

- **Framework** - Angular 17+ (Standalone Components)
- **Styling** - Tailwind CSS 4
- **State** - RxJS services
- **Routing** - Angular Router
- **SEO** - Meta service, JSON-LD
- **TypeScript** - Fully typed

## License

Manetho content is original research and editorial work. Code is available for educational and commercial use.

---

**Status:** Production Ready  
**Last Updated:** October 2026  
**Built with:** Angular, Tailwind, RxJS
