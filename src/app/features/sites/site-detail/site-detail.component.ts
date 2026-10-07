import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteService } from '../../../core/services/site.service';
import { ArticleService } from '../../../core/services/article.service';
import { SeoService } from '../../../core/services/seo.service';
import { ArchaeologicalSite } from '../../../core/models/site.model';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-site-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (site) {
      <article class="min-h-screen">
        <!-- Breadcrumbs -->
        <div class="bg-ivory-50 dark:bg-charcoal-900/50 py-4 border-b border-charcoal-200 dark:border-charcoal-700">
          <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="breadcrumb">
              <a routerLink="/" class="hover:text-charcoal-900 dark:hover:text-ivory-100">Home</a>
              <span class="text-charcoal-400">/</span>
              <a routerLink="/sites" class="hover:text-charcoal-900 dark:hover:text-ivory-100">Archaeological Sites</a>
              <span class="text-charcoal-400">/</span>
              <span class="text-charcoal-700 dark:text-ivory-300">{{ site.name }}</span>
            </nav>
          </div>
        </div>

        <!-- Hero Section -->
        <header class="relative h-96 md:h-[500px] overflow-hidden">
          @if (site.gallery && site.gallery.length > 0) {
            <img
              [src]="site.gallery[0].url"
              [alt]="site.gallery[0].alt"
              class="w-full h-full object-cover"
            />
          } @else {
            <div class="w-full h-full bg-gradient-to-br from-charcoal-200 to-charcoal-300 dark:from-charcoal-700 dark:to-charcoal-800"></div>
          }
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/40 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
            <div class="max-w-article mx-auto">
              <h1 class="font-display text-4xl md:text-5xl font-bold text-ivory-100 mb-4">
                {{ site.name }}
              </h1>
              <p class="text-xl text-ivory-300">
                {{ site.location }}
              </p>
            </div>
          </div>
        </header>

        <!-- Content -->
        <div class="py-12 md:py-16">
          <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Key Information -->
            <div class="grid md:grid-cols-2 gap-8 mb-12 p-8 rounded-lg bg-charcoal-50 dark:bg-charcoal-900/50 border border-charcoal-200 dark:border-charcoal-700">
              <div>
                <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">Period</h3>
                <p class="text-charcoal-600 dark:text-ivory-400">{{ site.period }}</p>
              </div>
              <div>
                <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">Location</h3>
                <p class="text-charcoal-600 dark:text-ivory-400">{{ site.location }}</p>
              </div>
            </div>

            <!-- Description -->
            <section class="mb-12">
              <h2 class="section-header mb-6">Historical Significance</h2>
              <p class="text-lg leading-relaxed text-charcoal-700 dark:text-ivory-300 mb-6">
                {{ site.historicalImportance }}
              </p>
              <p class="text-lg leading-relaxed text-charcoal-700 dark:text-ivory-300">
                {{ site.description }}
              </p>
            </section>

            <!-- Major Discoveries -->
            @if (site.majorDiscoveries && site.majorDiscoveries.length > 0) {
              <section class="mb-12">
                <h2 class="section-header mb-6">Major Discoveries</h2>
                <ul class="space-y-3">
                  @for (discovery of site.majorDiscoveries; track discovery) {
                    <li class="flex items-start gap-3">
                      <span class="text-gold-600 mt-1">◆</span>
                      <span class="text-charcoal-700 dark:text-ivory-300">{{ discovery }}</span>
                    </li>
                  }
                </ul>
              </section>
            }

            <!-- Monuments -->
            @if (site.monuments && site.monuments.length > 0) {
              <section class="mb-12">
                <h2 class="section-header mb-6">Monuments & Structures</h2>
                <ul class="space-y-3">
                  @for (monument of site.monuments; track monument) {
                    <li class="flex items-start gap-3">
                      <span class="text-gold-600 mt-1">■</span>
                      <span class="text-charcoal-700 dark:text-ivory-300">{{ monument }}</span>
                    </li>
                  }
                </ul>
              </section>
            }

            <!-- Timeline -->
            @if (site.timeline) {
              <section class="mb-12 p-8 rounded-lg bg-charcoal-50 dark:bg-charcoal-900/50 border border-charcoal-200 dark:border-charcoal-700">
                <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">
                  Timeline
                </h2>
                <p class="text-charcoal-700 dark:text-ivory-300">
                  {{ site.timeline }}
                </p>
              </section>
            }

            <!-- Gallery -->
            @if (site.gallery && site.gallery.length > 1) {
              <section class="mb-12">
                <h2 class="section-header mb-6">Gallery</h2>
                <div class="grid md:grid-cols-2 gap-6">
                  @for (image of site.gallery; track image.url) {
                    <figure class="rounded-lg overflow-hidden">
                      <img
                        [src]="image.url"
                        [alt]="image.alt"
                        class="w-full h-80 object-cover"
                      />
                      @if (image.caption) {
                        <figcaption class="article-caption px-4 py-3">
                          {{ image.caption }}
                        </figcaption>
                      }
                    </figure>
                  }
                </div>
              </section>
            }

            <!-- Related Articles -->
            @if (relatedArticles && relatedArticles.length > 0) {
              <section class="mb-12 pt-12 border-t border-charcoal-200 dark:border-charcoal-700">
                <h2 class="section-header mb-6">Related Articles</h2>
                <div class="space-y-3">
                  @for (article of relatedArticles; track article.id) {
                    <a
                      [routerLink]="['/articles', article.slug]"
                      class="block p-4 rounded-lg border border-charcoal-200 dark:border-charcoal-700 hover:border-gold-500 transition-all group"
                    >
                      <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors">
                        {{ article.title }}
                      </h3>
                      <p class="text-sm text-charcoal-600 dark:text-ivory-400 mt-1">
                        {{ article.readingTime }} min read
                      </p>
                    </a>
                  }
                </div>
              </section>
            }

            <!-- Navigation -->
            @if (previousSite || nextSite) {
              <nav class="py-12 border-t border-charcoal-200 dark:border-charcoal-700">
                <div class="grid md:grid-cols-2 gap-8">
                  @if (previousSite) {
                    <a
                      [routerLink]="['/sites', previousSite.slug]"
                      class="group block p-6 rounded-lg border border-charcoal-200 dark:border-charcoal-700 hover:border-gold-500 dark:hover:border-gold-500 transition-all"
                    >
                      <span class="text-xs font-semibold text-charcoal-600 dark:text-ivory-400 uppercase tracking-wide">← Previous</span>
                      <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors mt-2">
                        {{ previousSite.name }}
                      </h3>
                    </a>
                  }
                  @if (nextSite) {
                    <a
                      [routerLink]="['/sites', nextSite.slug]"
                      class="group block p-6 rounded-lg border border-charcoal-200 dark:border-charcoal-700 hover:border-gold-500 dark:hover:border-gold-500 transition-all text-right"
                    >
                      <span class="text-xs font-semibold text-charcoal-600 dark:text-ivory-400 uppercase tracking-wide">Next →</span>
                      <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors mt-2">
                        {{ nextSite.name }}
                      </h3>
                    </a>
                  }
                </div>
              </nav>
            }
          </div>
        </div>
      </article>
    } @else {
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="editorial-title mb-4">Site Not Found</h1>
          <p class="text-charcoal-600 dark:text-ivory-400 mb-8">
            The archaeological site you're looking for doesn't exist.
          </p>
          <a routerLink="/sites" class="btn-primary">Back to Sites</a>
        </div>
      </div>
    }
  `
})
export class SiteDetailComponent implements OnInit {
  site: ArchaeologicalSite | undefined;
  relatedArticles: Article[] = [];
  previousSite: ArchaeologicalSite | undefined;
  nextSite: ArchaeologicalSite | undefined;

  constructor(
    private route: ActivatedRoute,
    private siteService: SiteService,
    private articleService: ArticleService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.site = this.siteService.getSiteBySlug(slug);

      if (this.site) {
        this.relatedArticles = this.articleService.getAllArticles()
          .filter(a => this.site?.relatedArticles?.includes(a.slug))
          .slice(0, 4);
        this.setupNavigation();
        this.updateMetaTags();
        window.scrollTo(0, 0);
      }
    });
  }

  private setupNavigation(): void {
    const allSites = this.siteService.getAllSites();
    const currentIndex = allSites.findIndex(s => s.id === this.site?.id);

    if (currentIndex > 0) {
      this.nextSite = allSites[currentIndex - 1];
    }
    if (currentIndex < allSites.length - 1) {
      this.previousSite = allSites[currentIndex + 1];
    }
  }

  private updateMetaTags(): void {
    if (!this.site) return;

    this.seoService.updateMeta({
      title: this.site.name,
      description: `${this.site.name}, an archaeological site in Ancient Egypt. Location: ${this.site.location}. Historical period: ${this.site.period}.`,
      image: this.site.images?.[0],
      url: window.location.href,
      type: 'website'
    });
  }
}
