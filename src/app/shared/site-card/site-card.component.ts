import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArchaeologicalSite } from '../../core/models/site.model';
import { ImgPlaceholderDirective } from '../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-site-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ImgPlaceholderDirective],
  template: `
    <a [routerLink]="['/sites', site.slug]" class="card-editorial group block">
      <div class="aspect-[16/10] overflow-hidden relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
        <img
          appImgPlaceholder
          [appImgPlaceholder]="site.gallery[0]?.url"
          [alt]="site.gallery[0]?.alt || site.name"
          class="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
          loading="lazy">
        <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
      </div>
      <div class="p-6">
        <div class="text-xs text-gold-600 font-medium mb-2">{{ site.period | slice:0:30 }}</div>
        <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors">
          {{ site.name }}
        </h3>
        <p class="text-sm text-charcoal-500 dark:text-ivory-400 mb-3">{{ site.location | slice:0:50 }}</p>
        <p class="text-sm text-charcoal-600 dark:text-ivory-300 line-clamp-2">{{ site.historicalImportance | slice:0:120 }}...</p>
      </div>
    </a>
  `,
})
export class SiteCardComponent {
  @Input({ required: true }) site!: ArchaeologicalSite;
}