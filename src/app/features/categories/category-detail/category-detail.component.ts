import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article.model';
import { ArticleCardComponent } from '../../../shared/article-card/article-card.component';
import { BreadcrumbsComponent } from '../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent, BreadcrumbsComponent],
  template: `
    <div class="pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Categories', link: '/' }, { label: categoryName() }]" />
        <div class="mt-8 mb-12">
          <h1 class="editorial-title">{{ categoryName() }}</h1>
          <p class="editorial-subtitle mt-4">Articles and stories related to {{ categoryName() }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-article-card *ngFor="let article of articles()" [article]="article" />
        </div>
        <div *ngIf="!articles().length" class="text-center py-16">
          <p class="text-charcoal-500 dark:text-ivory-400">No articles found in this category yet.</p>
        </div>
      </div>
    </div>
  `,
})
export class CategoryDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  articles = signal<Article[]>([]);
  categoryName = signal('');

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        this.categoryName.set(name);
        this.articles.set(this.articleService.getByCategory(name));
      }
    });
  }
}
