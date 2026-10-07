import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { PharaohService } from './pharaoh.service';
import { SiteService } from './site.service';
import { TimelineService } from './timeline.service';
import { Article } from '../models/article.model';
import { Pharaoh } from '../models/pharaoh.model';
import { ArchaeologicalSite } from '../models/site.model';

export interface SearchResult {
  type: 'article' | 'pharaoh' | 'site' | 'category' | 'tag';
  title: string;
  slug?: string;
  excerpt?: string;
  category?: string;
  image?: string;
  imageAlt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private articleService: ArticleService,
    private pharaohService: PharaohService,
    private siteService: SiteService,
    private timelineService: TimelineService
  ) {}

  search(query: string): SearchResult[] {
    if (!query.trim()) {
      return [];
    }

    const results: SearchResult[] = [];

    // Search articles
    const articles = this.articleService.searchArticles(query);
    results.push(...articles.map(article => ({
      type: 'article' as const,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      category: article.category,
      image: article.coverImage,
      imageAlt: article.coverImageAlt
    })));

    // Search pharaohs
    const pharaohsFound = this.pharaohService.searchPharaohs(query);
    results.push(...pharaohsFound.map(pharaoh => ({
      type: 'pharaoh' as const,
      title: pharaoh.name,
      slug: pharaoh.slug,
      excerpt: `${pharaoh.dynasty} (${pharaoh.approximateDates})`,
      category: pharaoh.period,
      image: pharaoh.image,
      imageAlt: pharaoh.imageAlt
    })));

    // Search sites
    const sites = this.siteService.searchSites(query);
    results.push(...sites.map(site => ({
      type: 'site' as const,
      title: site.name,
      slug: site.slug,
      excerpt: site.location,
      category: site.period,
      image: site.gallery[0]?.url,
      imageAlt: site.gallery[0]?.alt
    })));

    // Search categories
    const categories = this.articleService.getCategories();
    const matchingCategories = categories.filter(cat =>
      cat.toLowerCase().includes(query.toLowerCase())
    );
    results.push(...matchingCategories.map(category => ({
      type: 'category' as const,
      title: category,
      slug: category.toLowerCase().replace(/\s+/g, '-'),
      excerpt: `View all articles in ${category}`
    })));

    // Search tags
    const tags = this.articleService.getTags();
    const matchingTags = tags.filter(tag =>
      tag.toLowerCase().includes(query.toLowerCase())
    );
    results.push(...matchingTags.map(tag => ({
      type: 'tag' as const,
      title: tag,
      slug: tag.toLowerCase(),
      excerpt: `View all articles tagged with ${tag}`
    })));

    return results;
  }

  searchByType(query: string, type: 'article' | 'pharaoh' | 'site'): SearchResult[] {
    const allResults = this.search(query);
    return allResults.filter(result => result.type === type);
  }

  getRecentSearches(): string[] {
    const searches = localStorage.getItem('recentSearches');
    return searches ? JSON.parse(searches) : [];
  }

  addRecentSearch(query: string): void {
    const searches = this.getRecentSearches();
    const filtered = searches.filter(s => s !== query);
    const updated = [query, ...filtered].slice(0, 10);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  }

  clearRecentSearches(): void {
    localStorage.removeItem('recentSearches');
  }
}
