import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Article } from '../../core/models/article.model';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="card-editorial flex flex-col h-full hover:shadow-xl transition-all duration-300">
      <a [routerLink]="['/articles', article.slug]" class="overflow-hidden block">
        <div class="relative aspect-video bg-charcoal-200 dark:bg-charcoal-700 overflow-hidden">
          <img
            [src]="article.coverImage"
            [alt]="article.coverImageAlt"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute top-3 left-3">
            <span class="inline-block px-3 py-1 bg-gold-600 text-white text-xs font-semibold rounded-full">
              {{ article.category }}
            </span>
          </div>
        </div>
      </a>

      <div class="flex-1 p-6 flex flex-col">
        <a [routerLink]="['/articles', article.slug]" class="block group">
          <h3 class="font-display text-lg md:text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors">
            {{ article.title }}
          </h3>
        </a>

        <p class="text-charcoal-600 dark:text-ivory-400 text-sm leading-relaxed mb-4 flex-1">
          {{ article.excerpt }}
        </p>

        <div class="flex items-center justify-between pt-4 border-t border-charcoal-200 dark:border-charcoal-700">
          <div class="flex items-center gap-2 text-xs text-charcoal-500 dark:text-ivory-400">
            <span>{{ article.publishedAt | date: 'MMM d, y' }}</span>
            <span class="text-charcoal-300 dark:text-charcoal-600">•</span>
            <span>{{ article.readingTime }} min read</span>
          </div>
        </div>

        <div class="flex items-center gap-2 mt-3 flex-wrap">
          @for (tag of article.tags.slice(0, 2); track tag) {
            <span class="tag text-xs">{{ tag }}</span>
          }
        </div>
      </div>
    </article>
  `
})
export class ArticleCardComponent {
  @Input() article!: Article;
}
