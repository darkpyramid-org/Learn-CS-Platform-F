import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharaohService } from '../../../core/services/pharaoh.service';
import { ArticleService } from '../../../core/services/article.service';
import { Pharaoh } from '../../../core/models/pharaoh.model';
import { Article } from '../../../core/models/article.model';
import { BreadcrumbsComponent } from '../../../shared/breadcrumbs/breadcrumbs.component';
import { ArticleCardComponent } from '../../../shared/article-card/article-card.component';
import { ImgPlaceholderDirective } from '../../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-pharaoh-detail',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent, ArticleCardComponent, ImgPlaceholderDirective],
  template: `
    <div class="pt-16 lg:pt-20" *ngIf="pharaoh() as ph">
      <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Pharaohs', link: '/pharaohs' }, { label: ph.name }]" />

        <!-- Header -->
        <header class="mt-8 mb-12">
          <div class="flex items-start gap-8">
            <div class="w-32 h-40 rounded-lg overflow-hidden flex-shrink-0 relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
              <img
                appImgPlaceholder
                [appImgPlaceholder]="ph.image"
                [alt]="ph.imageAlt"
                class="w-full h-full object-cover transition-all duration-1000 ease-out"
                loading="eager">
              <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
            </div>
            <div>
              <h1 class="editorial-title mb-2">{{ ph.name }}</h1>
              <p *ngIf="ph.throneName" class="text-lg text-charcoal-500 dark:text-ivory-400 mb-2">Throne name: {{ ph.throneName }}</p>
              <div class="flex flex-wrap gap-4 text-sm text-charcoal-600 dark:text-ivory-300">
                <span>{{ ph.dynasty }}</span>
                <span>&middot;</span>
                <span>{{ ph.reign }}</span>
                <span>&middot;</span>
                <span>{{ ph.period }}</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Biography -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Biography</h2>
          <div class="article-content max-w-reading" [innerHTML]="ph.biography"></div>
        </section>

        <!-- Achievements -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Achievements</h2>
          <ul class="space-y-2">
            <li *ngFor="let achievement of ph.achievements" class="flex items-start gap-3">
              <span class="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
              <span class="text-charcoal-700 dark:text-ivory-200">{{ achievement }}</span>
            </li>
          </ul>
        </section>

        <!-- Monuments -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Monuments</h2>
          <ul class="space-y-2">
            <li *ngFor="let monument of ph.monuments" class="flex items-start gap-3">
              <span class="w-2 h-2 bg-lapis-500 rounded-full mt-2 flex-shrink-0"></span>
              <span class="text-charcoal-700 dark:text-ivory-200">{{ monument }}</span>
            </li>
          </ul>
        </section>

        <!-- Family -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Family</h2>
          <p class="text-charcoal-700 dark:text-ivory-200">{{ ph.family }}</p>
        </section>

        <!-- Related Articles -->
        <div *ngIf="relatedArticles().length" class="mt-16 pt-12 border-t border-charcoal-200 dark:border-charcoal-700">
          <h2 class="section-header mb-8">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-article-card *ngFor="let article of relatedArticles()" [article]="article" />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PharaohDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private pharaohService = inject(PharaohService);
  private articleService = inject(ArticleService);

  pharaoh = signal<Pharaoh | undefined>(undefined);
  relatedArticles = signal<Article[]>([]);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.pharaohService.getBySlug(slug);
        this.pharaoh.set(found);
        if (found?.relatedArticles?.length) {
          this.relatedArticles.set(this.articleService.getBySlugs(found.relatedArticles));
        }
      }
    });
  }
}
