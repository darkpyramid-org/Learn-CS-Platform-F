import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pharaoh } from '../../core/models/pharaoh.model';
import { ImgPlaceholderDirective } from '../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-pharaoh-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ImgPlaceholderDirective],
  template: `
    <a [routerLink]="['/pharaohs', pharaoh.slug]" class="card-editorial group block">
      <div class="aspect-[4/5] overflow-hidden relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
        <img
          appImgPlaceholder
          [appImgPlaceholder]="pharaoh.image"
          [alt]="pharaoh.imageAlt"
          class="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
          loading="lazy">
        <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
      </div>
      <div class="p-6">
        <div class="text-xs text-gold-600 font-medium mb-2">{{ pharaoh.dynasty }}</div>
        <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-1 group-hover:text-gold-600 transition-colors">
          {{ pharaoh.name }}
        </h3>
        <p class="text-sm text-charcoal-500 dark:text-ivory-400 mb-3">{{ pharaoh.reign }}</p>
        <p class="text-sm text-charcoal-600 dark:text-ivory-300 line-clamp-2">{{ pharaoh.biography | slice:0:120 }}...</p>
      </div>
    </a>
  `,
})
export class PharaohCardComponent {
  @Input({ required: true }) pharaoh!: Pharaoh;
}