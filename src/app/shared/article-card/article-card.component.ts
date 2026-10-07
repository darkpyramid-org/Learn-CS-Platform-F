import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Article } from '../../core/models/article.model';
import { ImgPlaceholderDirective } from '../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ImgPlaceholderDirective],
  template: `
    <article class="card-editorial group">
      <a [routerLink]="['/articles', article.slug]" class="block">
        <div class="aspect-[16/10] overflow-hidden relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
          <img
            appImgPlaceholder
            [appImgPlaceholder]="article.coverImage"
            [alt]="article.coverImageAlt"
            class="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
            loading="lazy">
          <!-- Loading skeleton -->
          <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800" [class.hidden]="!article.coverImage"></div>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="tag">{{ article.category }}</span>
            <span class="text-xs text-charcoal-400 dark:text-ivory-500">{{ article.readingTime }} min read</span>
          </div>
          <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
            {{ article.title }}
          </h3>
          <p class="text-charcoal-600 dark:text-ivory-300 text-sm line-clamp-2 mb-4">{{ article.excerpt }}</p>
          <div class="flex items-center gap-2 text-xs text-charcoal-500 dark:text-ivory-400">
            <span>{{ article.author.name }}</span>
            <span>&middot;</span>
            <span>{{ article.publishedAt | date:'mediumDate' }}</span>
          </div>
        </div>
      </a>
    </article>
  `,
})
export class ArticleCardComponent {
  @Input({ required: true }) article!: Article;
}