import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article.model';
import { BreadcrumbsComponent } from '../../../shared/breadcrumbs/breadcrumbs.component';
import { ReadingProgressComponent } from '../../../shared/reading-progress/reading-progress.component';
import { BookmarkButtonComponent } from '../../../shared/bookmark-button/bookmark-button.component';
import { ShareButtonsComponent } from '../../../shared/share-buttons/share-buttons.component';
import { ArticleCardComponent } from '../../../shared/article-card/article-card.component';
import { ImgPlaceholderDirective } from '../../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent, ReadingProgressComponent, BookmarkButtonComponent, ShareButtonsComponent, ArticleCardComponent, ImgPlaceholderDirective],
  template: `
    <div class="pt-16 lg:pt-20" *ngIf="article() as art">
      <app-reading-progress />
      <article class="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Breadcrumbs -->
        <app-breadcrumbs [items]="[{ label: 'Articles', link: '/articles' }, { label: art.category, link: '/category/' + art.category.toLowerCase().replace(' ', '-') }, { label: art.title }]" />

        <!-- Header -->
        <header class="mt-8 mb-12">
          <div class="flex items-center gap-3 mb-4">
            <span class="tag">{{ art.category }}</span>
            <span class="text-sm text-charcoal-500 dark:text-ivory-400">{{ art.readingTime }} min read</span>
          </div>
          <h1 class="editorial-title mb-4">{{ art.title }}</h1>
          <p class="editorial-subtitle mb-6">{{ art.subtitle }}</p>
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center gap-4">
              <div>
                <p class="font-medium text-charcoal-900 dark:text-ivory-100">{{ art.author.name }}</p>
                <p class="text-sm text-charcoal-500 dark:text-ivory-400">{{ art.author.role }}</p>
              </div>
              <span class="text-charcoal-300 dark:text-ivory-600">|</span>
              <p class="text-sm text-charcoal-500 dark:text-ivory-400">{{ art.publishedAt | date:'longDate' }}</p>
            </div>
            <div class="flex items-center gap-2">
              <app-bookmark-button [articleId]="art.id" />
              <app-share-buttons [title]="art.title" />
            </div>
          </div>
        </header>

        <!-- Hero Image -->
        <figure class="mb-12 relative bg-charcoal-100/50 dark:bg-charcoal-800/50 rounded-lg overflow-hidden">
          <img
            appImgPlaceholder
            [appImgPlaceholder]="art.coverImage"
            [alt]="art.coverImageAlt"
            class="w-full rounded-lg transition-all duration-1000 ease-out"
            loading="eager">
          <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
          <figcaption *ngIf="art.coverImageCaption" class="article-caption mt-3 text-center relative z-10">{{ art.coverImageCaption }}</figcaption>
        </figure>

        <!-- Content -->
        <div class="article-content max-w-reading mx-auto" [innerHTML]="art.content"></div>

        <!-- Sources -->
        <div *ngIf="art.sources?.length" class="max-w-reading mx-auto mt-12 pt-8 border-t border-charcoal-200 dark:border-charcoal-700">
          <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Sources</h3>
          <ul class="space-y-2">
            <li *ngFor="let source of art.sources" class="text-sm text-charcoal-600 dark:text-ivory-300">
              <span class="font-medium">{{ source.title }}</span>
              <span *ngIf="source.publisher">, {{ source.publisher }}</span>
              <span *ngIf="source.date"> ({{ source.date }})</span>
            </li>
          </ul>
        </div>

        <!-- Tags -->
        <div class="max-w-reading mx-auto mt-8 flex flex-wrap gap-2">
          <span *ngFor="let tag of art.tags" class="tag">{{ tag }}</span>
        </div>

        <!-- Related Articles -->
        <div *ngIf="relatedArticles().length" class="mt-16 pt-12 border-t border-charcoal-200 dark:border-charcoal-700">
          <h2 class="section-header mb-8">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-article-card *ngFor="let related of relatedArticles()" [article]="related" />
          </div>
        </div>
      </article>
    </div>
  `,
})
export class ArticleDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  article = signal<Article | undefined>(undefined);
  relatedArticles = signal<Article[]>([]);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.articleService.getBySlug(slug);
        this.article.set(found);
        if (found?.relatedArticles?.length) {
          this.relatedArticles.set(this.articleService.getBySlugs(found.relatedArticles));
        }
      }
    });
  }
}
