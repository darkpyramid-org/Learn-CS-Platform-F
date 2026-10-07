import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../core/services/article.service';
import { Article } from '../../core/models/article.model';
import { ArticleCardComponent } from '../../shared/article-card/article-card.component';
import { CategoryCardComponent } from '../../shared/category-card/category-card.component';
import { NewsletterComponent } from '../../shared/newsletter/newsletter.component';
import { ImgPlaceholderDirective } from '../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleCardComponent, CategoryCardComponent, NewsletterComponent, ImgPlaceholderDirective],
  template: `
    <div class="pt-16 lg:pt-20">
      <!-- Hero / Featured Story -->
      <section class="relative bg-charcoal-900 text-ivory-100 overflow-hidden">
        <div class="absolute inset-0">
          <img
            appImgPlaceholder
            [appImgPlaceholder]="featuredArticle()?.coverImage"
            [alt]="featuredArticle()?.coverImageAlt"
            class="w-full h-full object-cover opacity-40 transition-all duration-1000 ease-out"
            loading="eager">
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent"></div>
          <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-800 via-charcoal-700 to-charcoal-800" [class.hidden]="featuredArticle()?.coverImage"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div class="max-w-3xl">
            <div class="flex items-center gap-3 mb-6">
              <span class="tag bg-gold-500/20 text-gold-400 border-gold-500/30">{{ featuredArticle()?.category }}</span>
              <span class="text-ivory-400 text-sm">{{ featuredArticle()?.readingTime }} min read</span>
            </div>
            <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {{ featuredArticle()?.title }}
            </h1>
            <p class="font-serif text-xl md:text-2xl text-ivory-300 leading-relaxed mb-8">
              {{ featuredArticle()?.excerpt }}
            </p>
            <div class="flex items-center gap-4 mb-8">
              <span class="text-ivory-400 text-sm">By {{ featuredArticle()?.author?.name }}</span>
              <span class="text-ivory-500">&middot;</span>
              <span class="text-ivory-400 text-sm">{{ featuredArticle()?.publishedAt | date:'longDate' }}</span>
            </div>
            <a [routerLink]="['/articles', featuredArticle()?.slug]" class="btn-gold text-lg px-8 py-4">
              Read the Story
            </a>
          </div>
        </div>
      </section>

      <!-- Latest Articles -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="section-header">Latest Articles</h2>
            <p class="section-subheader">Recent stories from the world of Ancient Egypt</p>
          </div>
          <a routerLink="/articles" class="hidden sm:inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors">
            View all articles <span>&rarr;</span>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-article-card *ngFor="let article of latestArticles()" [article]="article" />
        </div>
        <div class="mt-8 text-center sm:hidden">
          <a routerLink="/articles" class="btn-outline">View all articles</a>
        </div>
      </section>

      <!-- Categories -->
      <section class="bg-ivory-200/50 dark:bg-charcoal-900/50 py-16 lg:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="section-header">Explore by Category</h2>
            <p class="section-subheader max-w-2xl mx-auto">Discover the many facets of Ancient Egyptian civilization</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <app-category-card *ngFor="let category of categories" [category]="category" />
          </div>
        </div>
      </section>

      <!-- Editorial Pillars -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="text-center mb-12">
          <h2 class="section-header">The Manetho Approach</h2>
          <p class="section-subheader max-w-2xl mx-auto">Rigorous scholarship, accessible writing, and respect for the evidence</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-8">
            <div class="w-16 h-16 bg-gold-100 dark:bg-gold-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-3">Scholarly Rigor</h3>
            <p class="text-charcoal-600 dark:text-ivory-300 text-sm leading-relaxed">Every article is grounded in archaeological evidence and peer-reviewed research, with sources clearly cited.</p>
          </div>
          <div class="text-center p-8">
            <div class="w-16 h-16 bg-lapis-100 dark:bg-lapis-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-lapis-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-3">Accessible Writing</h3>
            <p class="text-charcoal-600 dark:text-ivory-300 text-sm leading-relaxed">Complex historical topics presented in clear, engaging prose that respects the reader's intelligence.</p>
          </div>
          <div class="text-center p-8">
            <div class="w-16 h-16 bg-sand-100 dark:bg-sand-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-sand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-3">Evidence First</h3>
            <p class="text-charcoal-600 dark:text-ivory-300 text-sm leading-relaxed">We distinguish between established facts, scholarly interpretations, and unresolved questions.</p>
          </div>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <app-newsletter />
      </section>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  private articleService = inject(ArticleService);

  featuredArticle = signal<Article | undefined>(undefined);
  latestArticles = signal<Article[]>([]);

  categories = [
    { slug: 'ancient-egypt', title: 'Ancient Egypt', description: 'Civilization, society, government, and daily life in the Nile Valley.', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800', articleCount: 5 },
    { slug: 'pharaohs', title: 'Pharaohs', description: 'Biographies and reigns of Egypt\'s divine rulers.', image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800', articleCount: 10 },
    { slug: 'archaeology', title: 'Archaeology', description: 'Excavations, tombs, temples, and the methods that uncover the past.', image: 'https://images.unsplash.com/photo-1590133324192-1df305deeefc?w=800', articleCount: 4 },
    { slug: 'mythology', title: 'Mythology', description: 'Gods, creation myths, rituals, and beliefs about the afterlife.', image: 'https://images.unsplash.com/photo-1562779830-2403d77b5bc5?w=800', articleCount: 3 },
    { slug: 'discoveries', title: 'Discoveries', description: 'Recent archaeological finds and historical research.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800', articleCount: 3 },
    { slug: 'artifacts', title: 'Artifacts', description: 'Important objects and what they reveal about Egyptian civilization.', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800', articleCount: 2 },
  ];

  ngOnInit() {
    const all = this.articleService.getAll();
    this.featuredArticle.set(all.find(a => a.featured) || all[0]);
    this.latestArticles.set(all.filter(a => !a.featured).slice(0, 6));
  }
}
