import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArchaeologicalSite } from '../../core/models/site.model';

@Component({
  selector: 'app-site-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="card-editorial flex flex-col h-full hover:shadow-xl transition-all duration-300">
      <a [routerLink]="['/sites', site.slug]" class="overflow-hidden block">
        <div class="relative aspect-video bg-charcoal-200 dark:bg-charcoal-700 overflow-hidden">
          @if (site.gallery && site.gallery.length > 0) {
            <img
              [src]="site.gallery[0].url"
              [alt]="site.gallery[0].alt"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          } @else {
            <div class="w-full h-full bg-gradient-to-br from-charcoal-300 to-charcoal-400 dark:from-charcoal-600 dark:to-charcoal-700"></div>
          }
        </div>
      </a>

      <div class="flex-1 p-6 flex flex-col">
        <a [routerLink]="['/sites', site.slug]" class="group">
          <h3 class="font-display text-lg md:text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors">
            {{ site.name }}
          </h3>
        </a>

        <p class="text-charcoal-600 dark:text-ivory-400 text-sm leading-relaxed mb-4 flex-1">
          {{ site.description.substring(0, 100) }}...
        </p>

        <div class="flex items-center justify-between pt-4 border-t border-charcoal-200 dark:border-charcoal-700">
          <div class="text-xs text-charcoal-500 dark:text-ivory-400">
            {{ site.location.split(',')[site.location.split(',').length - 1] }}
          </div>
        </div>

        <a [routerLink]="['/sites', site.slug]" class="btn-outline text-sm text-center mt-4">
          Learn More
        </a>
      </div>
    </article>
  `
})
export class SiteCardComponent {
  @Input() site!: ArchaeologicalSite;
}
