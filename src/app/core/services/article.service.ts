import { Injectable } from '@angular/core';
import { articles } from '../data/articles';
import { Article } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private articles = articles;

  getAll(): Article[] {
    return this.articles;
  }

  getBySlug(slug: string): Article | undefined {
    return this.articles.find(a => a.slug === slug);
  }

  getBySlugs(slugs: string[]): Article[] {
    return slugs.map(s => this.getBySlug(s)).filter((a): a is Article => !!a);
  }

  getByCategory(category: string): Article[] {
    return this.articles.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }

  getFeatured(): Article[] {
    return this.articles.filter(a => a.featured);
  }
}
