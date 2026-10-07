import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImgPlaceholderDirective } from '../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ImgPlaceholderDirective],
  template: `
    <a [routerLink]="['/category', category.slug]" class="card-editorial group block">
      <div class="aspect-[16/9] overflow-hidden relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
        <img
          appImgPlaceholder
          [appImgPlaceholder]="category.image"
          [alt]="category.title"
          class="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
          loading="lazy">
        <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
      </div>
      <div class="p-6">
        <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors">
          {{ category.title }}
        </h3>
        <p class="text-charcoal-600 dark:text-ivory-300 text-sm mb-4 line-clamp-2">{{ category.description }}</p>
        <div class="flex items-center justify-between">
          <span class="text-xs text-charcoal-500 dark:text-ivory-400">{{ category.articleCount }} articles</span>
          <span class="text-gold-600 text-sm font-medium group-hover:translate-x-1 transition-transform">Explore &rarr;</span>
        </div>
      </div>
    </a>
  `,
})
export class CategoryCardComponent {
  @Input({ required: true }) category!: { slug: string; title: string; description: string; image: string; articleCount: number };
}