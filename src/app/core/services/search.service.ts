import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { PharaohService } from './pharaoh.service';
import { SiteService } from './site.service';

export interface SearchResults {
  articles: any[];
  pharaohs: any[];
  sites: any[];
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private articleService: ArticleService,
    private pharaohService: PharaohService,
    private siteService: SiteService
  ) {}

  search(query: string): SearchResults {
    const q = query.toLowerCase().trim();
    if (!q) return { articles: [], pharaohs: [], sites: [] };

    return {
      articles: this.articleService.getAll().filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      ),
      pharaohs: this.pharaohService.getAll().filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.dynasty.toLowerCase().includes(q) ||
        p.reign.toLowerCase().includes(q)
      ),
      sites: this.siteService.getAll().filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      ),
    };
  }
}
