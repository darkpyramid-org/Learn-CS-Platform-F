import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../../core/services/article.service';
import { Article } from '../../core/models/article.model';
import { ArticleCardComponent } from '../../shared/article-card/article-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ArticleCardComponent],
  template: `
    <div class="min-h-screen">
      <!-- Hero / Featured Story -->
      @if (featuredArticle) {
        <section class="relative py-16 md:py-24 bg-gradient-to-br from-charcoal-50 via-ivory-50 to-sand-50 dark:from-charcoal-950 dark:via-charcoal-900/50 dark:to-charcoal-900/30">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <!-- Featured Content -->
              <div class="space-y-6">
                <div class="inline-block">
                  <span class="px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-900 dark:text-gold-200 text-xs font-semibold rounded-full uppercase tracking-wide">
                    Featured Story
                  </span>
                </div>
                <h1 class="editorial-title">
                  {{ featuredArticle.title }}
                </h1>
                <p class="editorial-subtitle">
                  {{ featuredArticle.subtitle || featuredArticle.excerpt }}
                </p>
                <div class="flex items-center gap-4 text-sm text-charcoal-600 dark:text-ivory-400">
                  <span>{{ featuredArticle.publishedAt | date: 'MMM d, y' }}</span>
                  <span class="text-charcoal-400">•</span>
                  <span>{{ featuredArticle.readingTime }} min read</span>
                </div>
                <a [routerLink]="['/articles', featuredArticle.slug]" class="btn-primary inline-block">
                  Read the Story
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <!-- Featured Image -->
              <div class="overflow-hidden rounded-lg">
                <img
                  [src]="featuredArticle.coverImage"
                  [alt]="featuredArticle.coverImageAlt"
                  class="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      }

      <!-- Latest Articles Section -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="section-header mb-4">Latest Articles</h2>
            <p class="section-subheader">
              Explore our recent historical investigations and discoveries
            </p>
          </div>

          @if (latestArticles.length > 0) {
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              @for (article of latestArticles.slice(0, 6); track article.id) {
                <app-article-card [article]="article" />
              }
            </div>

            <div class="text-center">
              <a routerLink="/articles" class="btn-outline">
                View All Articles
              </a>
            </div>
          }
        </div>
      </section>

      <!-- Categories Section -->
      <section class="py-16 md:py-24 bg-charcoal-50 dark:bg-charcoal-900/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="section-header mb-4">Explore by Category</h2>
            <p class="section-subheader">
              Discover Egypt's history organized by subject
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (category of categories; track category.slug) {
              <a [routerLink]="['/articles']" [queryParams]="{ category: category.name }" class="group card-editorial p-8 text-center">
                <div class="text-4xl mb-4">{{ category.emoji }}</div>
                <h3 class="font-display text-2xl font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors">
                  {{ category.name }}
                </h3>
                <p class="text-charcoal-600 dark:text-ivory-400 text-sm">
                  {{ category.description }}
                </p>
                <span class="inline-block mt-4 text-xs font-semibold text-gold-600 group-hover:text-gold-700">
                  {{ category.count }} articles →
                </span>
              </a>
            }
          </div>
        </div>
      </section>

      <!-- Editorial Pillars -->
      <section class="py-16 md:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-12">
            <h2 class="section-header mb-4">What is Manetho?</h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="space-y-4">
              <div class="w-16 h-16 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center">
                <span class="text-3xl">📚</span>
              </div>
              <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100">
                Historical Scholarship
              </h3>
              <p class="text-charcoal-600 dark:text-ivory-400">
                Deep dives into Ancient Egypt grounded in archaeological evidence, scholarly research, and primary sources.
              </p>
            </div>

            <div class="space-y-4">
              <div class="w-16 h-16 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center">
                <span class="text-3xl">🏛️</span>
              </div>
              <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100">
                Editorial Excellence
              </h3>
              <p class="text-charcoal-600 dark:text-ivory-400">
                Beautifully written, meticulously researched articles that make history accessible without sacrificing rigor.
              </p>
            </div>

            <div class="space-y-4">
              <div class="w-16 h-16 rounded-lg bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center">
                <span class="text-3xl">🔍</span>
              </div>
              <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100">
                Intellectual Honesty
              </h3>
              <p class="text-charcoal-600 dark:text-ivory-400">
                We distinguish between established facts, scholarly interpretation, and unsolved mysteries in ancient Egypt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="py-16 md:py-24 bg-charcoal-900 dark:bg-charcoal-950">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-ivory-100 mb-4">
            The Manetho Dispatch
          </h2>
          <p class="text-lg text-ivory-300 mb-8">
            Receive new discoveries, historical stories, and insights from Ancient Egypt — delivered occasionally to your inbox.
          </p>

          <form (submit)="onNewsletterSubmit($event)" class="flex gap-3">
            <input
              type="email"
              [(ngModel)]="newsletterEmail"
              name="email"
              placeholder="Enter your email"
              class="newsletter-input flex-1"
              required
            />
            <button type="submit" class="btn-primary px-8">
              Subscribe
            </button>
          </form>
          <p class="text-xs text-ivory-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  featuredArticle: Article | undefined;
  latestArticles: Article[] = [];
  newsletterEmail = '';

  categories = [
    {
      slug: 'ancient-egypt',
      name: 'Ancient Egypt',
      description: 'Civilization, society, government, and daily life',
      emoji: '🏺',
      count: 0
    },
    {
      slug: 'pharaohs',
      name: 'Pharaohs',
      description: 'Biographies and reigns of Egyptian rulers',
      emoji: '👑',
      count: 0
    },
    {
      slug: 'archaeology',
      name: 'Archaeology',
      description: 'Excavations, tombs, temples, and artifacts',
      emoji: '🔨',
      count: 0
    },
    {
      slug: 'mythology',
      name: 'Mythology',
      description: 'Gods, creation myths, rituals, and beliefs',
      emoji: '⚡',
      count: 0
    },
    {
      slug: 'discoveries',
      name: 'Discoveries',
      description: 'Recent archaeological findings and research',
      emoji: '✨',
      count: 0
    },
    {
      slug: 'artifacts',
      name: 'Artifacts',
      description: 'Important objects and their significance',
      emoji: '💎',
      count: 0
    }
  ];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    const allArticles = this.articleService.getAllArticles();

    // Set featured article (first featured or most recent)
    this.featuredArticle = allArticles.find(a => a.featured) || allArticles[0];

    // Set latest articles
    this.latestArticles = this.articleService.getLatestArticles(12);

    // Count articles by category
    this.categories.forEach(category => {
      category.count = allArticles.filter(a => a.category === category.name).length;
    });
  }

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    if (this.newsletterEmail) {
      // In a real app, this would call an API
      const emails = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
      if (!emails.includes(this.newsletterEmail)) {
        emails.push(this.newsletterEmail);
        localStorage.setItem('newsletterSubscribers', JSON.stringify(emails));
      }
      alert('Thank you for subscribing!');
      this.newsletterEmail = '';
    }
  }
}
