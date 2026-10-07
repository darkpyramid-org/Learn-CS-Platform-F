import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteService } from '../../../core/services/site.service';
import { ArticleService } from '../../../core/services/article.service';
import { ArchaeologicalSite } from '../../../core/models/site.model';
import { Article } from '../../../core/models/article.model';
import { BreadcrumbsComponent } from '../../../shared/breadcrumbs/breadcrumbs.component';
import { ArticleCardComponent } from '../../../shared/article-card/article-card.component';
import { ImgPlaceholderDirective } from '../../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-site-detail',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent, ArticleCardComponent, ImgPlaceholderDirective],
  template: `
    <div class="pt-16 lg:pt-20" *ngIf="site() as s">
      <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Sites', link: '/sites' }, { label: s.name }]" />

        <!-- Header -->
        <header class="mt-8 mb-12">
          <h1 class="editorial-title mb-4">{{ s.name }}</h1>
          <div class="flex flex-wrap gap-4 text-sm text-charcoal-600 dark:text-ivory-300">
            <span>{{ s.location }}</span>
            <span>&middot;</span>
            <span>{{ s.period }}</span>
          </div>
        </header>

        <!-- Hero Image -->
        <figure class="mb-12 relative bg-charcoal-100/50 dark:bg-charcoal-800/50 rounded-lg overflow-hidden">
          <img
            appImgPlaceholder
            [appImgPlaceholder]="s.gallery[0]?.url"
            [alt]="s.gallery[0]?.alt || s.name"
            class="w-full rounded-lg transition-all duration-1000 ease-out"
            loading="eager">
          <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
          <figcaption *ngIf="s.gallery[0]?.caption" class="article-caption mt-3 text-center relative z-10">{{ s.gallery[0].caption }}</figcaption>
        </figure>

        <!-- Description -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">About</h2>
          <div class="article-content max-w-reading" [innerHTML]="s.description"></div>
        </section>

        <!-- Historical Importance -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Historical Importance</h2>
          <p class="text-charcoal-700 dark:text-ivory-200">{{ s.historicalImportance }}</p>
        </section>

        <!-- Major Discoveries -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Major Discoveries</h2>
          <ul class="space-y-2">
            <li *ngFor="let discovery of s.majorDiscoveries" class="flex items-start gap-3">
              <span class="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
              <span class="text-charcoal-700 dark:text-ivory-200">{{ discovery }}</span>
            </li>
          </ul>
        </section>

        <!-- Monuments -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Monuments</h2>
          <ul class="space-y-2">
            <li *ngFor="let monument of s.monuments" class="flex items-start gap-3">
              <span class="w-2 h-2 bg-lapis-500 rounded-full mt-2 flex-shrink-0"></span>
              <span class="text-charcoal-700 dark:text-ivory-200">{{ monument }}</span>
            </li>
          </ul>
        </section>

        <!-- Timeline -->
        <section class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Timeline</h2>
          <p class="text-charcoal-700 dark:text-ivory-200">{{ s.timeline }}</p>
        </section>

        <!-- Gallery -->
        <section *ngIf="s.gallery.length > 1" class="mb-12">
          <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Gallery</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure *ngFor="let img of s.gallery.slice(1)" class="relative bg-charcoal-100/50 dark:bg-charcoal-800/50 rounded-lg overflow-hidden">
              <img
                appImgPlaceholder
                [appImgPlaceholder]="img.url"
                [alt]="img.alt"
                class="w-full rounded-lg transition-all duration-700 ease-out opacity-0"
                loading="lazy">
              <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
              <figcaption *ngIf="img.caption" class="article-caption mt-2 text-center relative z-10">{{ img.caption }}</figcaption>
            </figure>
          </div>
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
export class SiteDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private siteService = inject(SiteService);
  private articleService = inject(ArticleService);

  site = signal<ArchaeologicalSite | undefined>(undefined);
  relatedArticles = signal<Article[]>([]);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        const found = this.siteService.getBySlug(slug);
        this.site.set(found);
        if (found?.relatedArticles?.length) {
          this.relatedArticles.set(this.articleService.getBySlugs(found.relatedArticles));
        }
      }
    });
  }
}
