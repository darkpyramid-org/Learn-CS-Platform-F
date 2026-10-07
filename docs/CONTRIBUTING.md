# Contributing to Manetho

## Code Standards

### TypeScript
- Use strict typing (avoid `any`)
- Add JSDoc comments for public methods
- Use interfaces for data models
- Follow Angular style guide

### Components
- Use standalone components
- Add descriptive selector names
- Keep components focused (single responsibility)
- Use proper accessibility attributes

### Services
- Use dependency injection
- Keep services focused
- Use RxJS for async operations
- Provide at 'root' level

### Styling
- Use Tailwind CSS classes
- Follow naming conventions
- Maintain dark mode support
- Use custom CSS utilities for complex styles

## Adding New Content

### Adding an Article

1. Open `src/app/core/data/articles.ts`
2. Add to articles array:
```typescript
{
  id: 'unique-id',
  slug: 'article-url-slug',
  title: 'Article Title',
  excerpt: 'Short summary',
  content: 'Full HTML content',
  category: 'Ancient Egypt',
  tags: ['tag1', 'tag2'],
  author: { id: 'author1', name: 'Author Name', role: 'Egyptologist' },
  publishedAt: new Date('2026-01-01').toISOString(),
  readingTime: 8,
  coverImage: 'url-to-image'
}
```

### Adding a Pharaoh

1. Open `src/app/core/data/pharaohs.ts`
2. Add to pharaohs array with complete profile

### Adding a Timeline Event

1. Open `src/app/core/data/timeline.ts`
2. Add to events array with date and description

## Git Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes
3. Commit: `git commit -m "feat: description"`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request

## Commit Messages

Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style
- `refactor:` - Code refactoring
- `test:` - Testing
- `chore:` - Build/config changes

Example: `feat: add new article about Tutankhamun`

## Testing

```bash
# Run tests
ng test

# Run with coverage
ng test --code-coverage
```

## Code Review

- Ensure TypeScript compilation passes
- Check responsive design (test at 360px and 1920px)
- Verify accessibility
- Test dark mode
- Ensure SEO tags updated
