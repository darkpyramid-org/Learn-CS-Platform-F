import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article.model';
import { ArticleCardComponent } from '../../../shared/article-card/article-card.component';
import { BreadcrumbsComponent } from '../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent, BreadcrumbsComponent],
  template: `
    <div class="pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Articles' }]" />
        <div class="mt-8 mb-12">
          <h1 class="editorial-title">Articles</h1>
          <p class="editorial-subtitle mt-4">Stories, research, and insights from the world of Ancient Egypt</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-article-card *ngFor="let article of articles()" [article]="article" />
        </div>
      </div>
    </div>
  `,
})
export class ArticlesListComponent implements OnInit {
  private articleService = inject(ArticleService);
  articles = signal<Article[]>([]);

  ngOnInit() {
    this.articles.set(this.articleService.getAll());
  }
}
