import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharaohService } from '../../../core/services/pharaoh.service';
import { ArticleService } from '../../../core/services/article.service';
import { SeoService } from '../../../core/services/seo.service';
import { Pharaoh } from '../../../core/models/pharaoh.model';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-pharaoh-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (pharaoh) {
      <article class="min-h-screen">
        <!-- Breadcrumbs -->
        <div class="bg-ivory-50 dark:bg-charcoal-900/50 py-4 border-b border-charcoal-200 dark:border-charcoal-700">
          <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="breadcrumb">
              <a routerLink="/" class="hover:text-charcoal-900 dark:hover:text-ivory-100">Home</a>
              <span class="text-charcoal-400">/</span>
              <a routerLink="/pharaohs" class="hover:text-charcoal-900 dark:hover:text-ivory-100">Pharaohs</a>
              <span class="text-charcoal-400">/</span>
              <span class="text-charcoal-700 dark:text-ivory-300">{{ pharaoh.name }}</span>
            </nav>
          </div>
        </div>

        <!-- Hero Section -->
        <header class="relative h-96 md:h-[500px] overflow-hidden">
          <img
            [src]="pharaoh.image"
            [alt]="pharaoh.imageAlt"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/40 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
            <div class="max-w-article mx-auto">
              <span class="inline-block px-4 py-2 bg-gold-600 text-white text-sm font-semibold rounded-lg mb-4">
                {{ pharaoh.dynasty }}
              </span>
              <h1 class="font-display text-4xl md:text-5xl font-bold text-ivory-100 mb-2">
                {{ pharaoh.name }}
              </h1>
              @if (pharaoh.throneName) {
                <p class="text-lg text-ivory-300">
                  {{ pharaoh.throneName }}
                </p>
              }
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
                <p class="text-charcoal-600 dark:text-ivory-400">{{ pharaoh.period }}</p>
              </div>
              <div>
                <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">Dynasty</h3>
                <p class="text-charcoal-600 dark:text-ivory-400">{{ pharaoh.dynasty }} (Dynasty {{ pharaoh.dynastyNumber }})</p>
              </div>
              <div>
                <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">Reign</h3>
                <p class="text-charcoal-600 dark:text-ivory-400">{{ pharaoh.reign }}</p>
              </div>
              <div>
                <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">Dates</h3>
                <p class="text-charcoal-600 dark:text-ivory-400">{{ pharaoh.approximateDates }}</p>
              </div>
            </div>

            <!-- Biography -->
            <section class="mb-12">
              <h2 class="section-header mb-6">Biography</h2>
              <p class="text-lg leading-relaxed text-charcoal-700 dark:text-ivory-300">
                {{ pharaoh.biography }}
              </p>
            </section>

            <!-- Achievements -->
            @if (pharaoh.achievements && pharaoh.achievements.length > 0) {
              <section class="mb-12">
                <h2 class="section-header mb-6">Achievements & Legacy</h2>
                <ul class="space-y-3">
                  @for (achievement of pharaoh.achievements; track achievement) {
                    <li class="flex items-start gap-3">
                      <span class="text-gold-600 mt-1">★</span>
                      <span class="text-charcoal-700 dark:text-ivory-300">{{ achievement }}</span>
                    </li>
                  }
                </ul>
              </section>
            }

            <!-- Monuments -->
            @if (pharaoh.monuments && pharaoh.monuments.length > 0) {
              <section class="mb-12">
                <h2 class="section-header mb-6">Monuments & Buildings</h2>
                <ul class="space-y-3">
                  @for (monument of pharaoh.monuments; track monument) {
                    <li class="flex items-start gap-3">
                      <span class="text-gold-600 mt-1">◈</span>
                      <span class="text-charcoal-700 dark:text-ivory-300">{{ monument }}</span>
                    </li>
                  }
                </ul>
              </section>
            }

            <!-- Family -->
            @if (pharaoh.family) {
              <section class="mb-12 p-8 rounded-lg bg-charcoal-50 dark:bg-charcoal-900/50 border border-charcoal-200 dark:border-charcoal-700">
                <h2 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">
                  Family & Lineage
                </h2>
                <p class="text-charcoal-700 dark:text-ivory-300">
                  {{ pharaoh.family }}
                </p>
              </section>
            }

            <!-- Important Events -->
            @if (pharaoh.importantEvents && pharaoh.importantEvents.length > 0) {
              <section class="mb-12">
                <h2 class="section-header mb-6">Important Events</h2>
                <div class="space-y-4">
                  @for (event of pharaoh.importantEvents; track event) {
                    <div class="pl-6 border-l-2 border-gold-500">
                      <p class="text-charcoal-700 dark:text-ivory-300">{{ event }}</p>
                    </div>
                  }
                </div>
              </section>
            }

            <!-- Related Articles -->
            @if (relatedArticles && relatedArticles.length > 0) {
              <section class="mb-12 pt-12 border-t border-charcoal-200 dark:border-charcoal-700">
                <h2 class="section-header mb-6">Related Articles</h2>
                <div class="grid md:grid-cols-2 gap-6">
                  @for (article of relatedArticles; track article.id) {
                    <a
                      [routerLink]="['/articles', article.slug]"
                      class="card-editorial p-6 hover:shadow-lg transition-all"
                    >
                      <div class="flex gap-4">
                        <img
                          [src]="article.coverImage"
                          [alt]="article.coverImageAlt"
                          class="w-20 h-20 rounded object-cover flex-shrink-0"
                        />
                        <div>
                          <h3 class="font-display font-bold text-charcoal-900 dark:text-ivory-100 mb-2 hover:text-gold-600 transition-colors">
                            {{ article.title }}
                          </h3>
                          <p class="text-xs text-charcoal-600 dark:text-ivory-400">
                            {{ article.readingTime }} min read
                          </p>
                        </div>
                      </div>
                    </a>
                  }
                </div>
              </section>
            }

            <!-- Navigation -->
            @if (previousPharaoh || nextPharaoh) {
              <nav class="py-12 border-t border-charcoal-200 dark:border-charcoal-700">
                <div class="grid md:grid-cols-2 gap-8">
                  @if (previousPharaoh) {
                    <a
                      [routerLink]="['/pharaohs', previousPharaoh.slug]"
                      class="group block p-6 rounded-lg border border-charcoal-200 dark:border-charcoal-700 hover:border-gold-500 dark:hover:border-gold-500 transition-all"
                    >
                      <span class="text-xs font-semibold text-charcoal-600 dark:text-ivory-400 uppercase tracking-wide">← Previous</span>
                      <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors mt-2">
                        {{ previousPharaoh.name }}
                      </h3>
                    </a>
                  }
                  @if (nextPharaoh) {
                    <a
                      [routerLink]="['/pharaohs', nextPharaoh.slug]"
                      class="group block p-6 rounded-lg border border-charcoal-200 dark:border-charcoal-700 hover:border-gold-500 dark:hover:border-gold-500 transition-all text-right"
                    >
                      <span class="text-xs font-semibold text-charcoal-600 dark:text-ivory-400 uppercase tracking-wide">Next →</span>
                      <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors mt-2">
                        {{ nextPharaoh.name }}
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
          <h1 class="editorial-title mb-4">Pharaoh Not Found</h1>
          <p class="text-charcoal-600 dark:text-ivory-400 mb-8">
            The pharaoh you're looking for doesn't exist in our database.
          </p>
          <a routerLink="/pharaohs" class="btn-primary">Back to Pharaohs</a>
        </div>
      </div>
    }
  `
})
export class PharaohDetailComponent implements OnInit {
  pharaoh: Pharaoh | undefined;
  relatedArticles: Article[] = [];
  previousPharaoh: Pharaoh | undefined;
  nextPharaoh: Pharaoh | undefined;

  constructor(
    private route: ActivatedRoute,
    private pharaohService: PharaohService,
    private articleService: ArticleService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.pharaoh = this.pharaohService.getPharaohBySlug(slug);

      if (this.pharaoh) {
        this.relatedArticles = this.articleService.getAllArticles()
          .filter(a => this.pharaoh?.relatedArticles?.includes(a.slug))
          .slice(0, 4);
        this.setupNavigation();
        this.updateMetaTags();
        window.scrollTo(0, 0);
      }
    });
  }

  private setupNavigation(): void {
    const allPharaohs = this.pharaohService.getAllPharaohs();
    const currentIndex = allPharaohs.findIndex(p => p.id === this.pharaoh?.id);

    if (currentIndex > 0) {
      this.nextPharaoh = allPharaohs[currentIndex - 1];
    }
    if (currentIndex < allPharaohs.length - 1) {
      this.previousPharaoh = allPharaohs[currentIndex + 1];
    }
  }

  private updateMetaTags(): void {
    if (!this.pharaoh) return;

    this.seoService.updateMeta({
      title: this.pharaoh.name,
      description: `${this.pharaoh.name}, ${this.pharaoh.dynasty || 'Egyptian Pharaoh'}. Reign: ${this.pharaoh.reign}. Learn about this significant ruler of Ancient Egypt.`,
      image: this.pharaoh.image,
      url: window.location.href,
      type: 'person'
    });

    // Add JSON-LD person schema
    const personSchema = this.seoService.createPersonSchema({
      name: this.pharaoh.name,
      role: this.pharaoh.dynasty,
      bio: `${this.pharaoh.name} reigned during ${this.pharaoh.reign}`
    });
    this.seoService.addJsonLd(personSchema);
  }
}
