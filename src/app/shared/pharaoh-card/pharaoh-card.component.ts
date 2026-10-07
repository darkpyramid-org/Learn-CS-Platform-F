import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Pharaoh } from '../../core/models/pharaoh.model';

@Component({
  selector: 'app-pharaoh-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="card-editorial flex flex-col h-full hover:shadow-xl transition-all duration-300">
      <a [routerLink]="['/pharaohs', pharaoh.slug]" class="overflow-hidden block">
        <div class="relative aspect-square bg-charcoal-200 dark:bg-charcoal-700 overflow-hidden">
          <img
            [src]="pharaoh.image"
            [alt]="pharaoh.imageAlt"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4">
            <span class="inline-block px-3 py-1 bg-gold-600 text-white text-xs font-semibold rounded-full mb-2">
              {{ pharaoh.dynasty }}
            </span>
            <h3 class="font-display text-xl font-bold text-ivory-100">
              {{ pharaoh.name }}
            </h3>
          </div>
        </div>
      </a>

      <div class="flex-1 p-6 flex flex-col">
        <p class="text-charcoal-600 dark:text-ivory-400 text-sm mb-4 flex-1">
          {{ pharaoh.biography.substring(0, 150) }}...
        </p>

        <div class="space-y-2 text-xs text-charcoal-600 dark:text-ivory-400 mb-4 pt-4 border-t border-charcoal-200 dark:border-charcoal-700">
          <div>
            <span class="font-semibold">Reign:</span> {{ pharaoh.approximateDates }}
          </div>
          <div>
            <span class="font-semibold">Period:</span> {{ pharaoh.period }}
          </div>
        </div>

        <a [routerLink]="['/pharaohs', pharaoh.slug]" class="btn-outline text-sm text-center">
          View Profile
        </a>
      </div>
    </article>
  `
})
export class PharaohCardComponent {
  @Input() pharaoh!: Pharaoh;
}
