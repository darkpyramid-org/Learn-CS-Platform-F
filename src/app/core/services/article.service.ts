import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { articles } from '../data/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesSubject = new BehaviorSubject<Article[]>(articles);
  articles$ = this.articlesSubject.asObservable();

  constructor() {}

  getAllArticles(): Article[] {
    return articles;
  }

  getArticles(): Observable<Article[]> {
    return this.articles$;
  }

  getArticleBySlug(slug: string): Article | undefined {
    return articles.find(article => article.slug === slug);
  }

  getArticlesByCategory(category: string): Article[] {
    return articles.filter(article => article.category === category);
  }

  getFeaturedArticles(): Article[] {
    return articles.filter(article => article.featured).slice(0, 3);
  }

  getLatestArticles(limit: number = 10): Article[] {
    return articles
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit);
  }

  getRelatedArticles(articleSlug: string, limit: number = 3): Article[] {
    const article = this.getArticleBySlug(articleSlug);
    if (!article || !article.relatedArticles) {
      return [];
    }

    return articles
      .filter(a => article.relatedArticles?.includes(a.slug))
      .slice(0, limit);
  }

  searchArticles(query: string): Article[] {
    const lowerQuery = query.toLowerCase();
    return articles.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      article.category.toLowerCase().includes(lowerQuery)
    );
  }

  getCategories(): string[] {
    const categories = new Set(articles.map(article => article.category));
    return Array.from(categories).sort();
  }

  getArticlesByTag(tag: string): Article[] {
    return articles.filter(article => article.tags.includes(tag));
  }

  getTags(): string[] {
    const tags = new Set<string>();
    articles.forEach(article => {
      article.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }

  getReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }
}
