import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../core/services/article.service';
import { SeoService } from '../../../core/services/seo.service';
import { Article } from '../../../core/models/article.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    @if (article) {
      <article class="min-h-screen">
        <!-- Reading Progress Bar -->
        <div class="reading-progress" [style.width.%]="readingProgress"></div>

        <!-- Breadcrumbs -->
        <div class="bg-ivory-50 dark:bg-charcoal-900/50 py-4 border-b border-charcoal-200 dark:border-charcoal-700">
          <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="breadcrumb">
              <a routerLink="/" class="hover:text-charcoal-900 dark:hover:text-ivory-100">Home</a>
              <span class="text-charcoal-400">/</span>
              <a routerLink="/articles" class="hover:text-charcoal-900 dark:hover:text-ivory-100">Articles</a>
              <span class="text-charcoal-400">/</span>
              <span class="text-charcoal-700 dark:text-ivory-300">{{ article.title }}</span>
            </nav>
          </div>
        </div>

        <!-- Article Header -->
        <header class="bg-charcoal-50 dark:bg-charcoal-900/50 py-12 md:py-16 border-b border-charcoal-200 dark:border-charcoal-700">
          <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-4 flex items-center gap-2">
              <span class="inline-block px-3 py-1 bg-gold-600 text-white text-xs font-semibold rounded-full">
                {{ article.category }}
              </span>
            </div>

            <h1 class="editorial-title mb-4">
              {{ article.title }}
            </h1>

            @if (article.subtitle) {
              <p class="editorial-subtitle mb-8">
                {{ article.subtitle }}
              </p>
            }

            <div class="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-charcoal-600 dark:text-ivory-400">
              <div class="flex items-center gap-3">
                @if (article.author.avatar) {
                  <img
                    [src]="article.author.avatar"
                    [alt]="article.author.name"
                    class="w-10 h-10 rounded-full"
                  />
                }
                <div>
                  <div class="font-semibold text-charcoal-900 dark:text-ivory-100">
                    {{ article.author.name }}
                  </div>
                  @if (article.author.role) {
                    <div class="text-xs">{{ article.author.role }}</div>
                  }
                </div>
              </div>

              <span class="hidden sm:block text-charcoal-400">•</span>

              <div class="flex items-center gap-4 text-xs">
                <span>Published {{ article.publishedAt | date: 'MMMM d, y' }}</span>
                @if (article.updatedAt) {
                  <span>
                    <span class="text-charcoal-400">•</span>
                    Updated {{ article.updatedAt | date: 'MMMM d, y' }}
                  </span>
                }
              </div>

              <span class="hidden sm:block text-charcoal-400">•</span>
              <span>{{ article.readingTime }} min read</span>
            </div>
          </div>
        </header>

        <!-- Featured Image -->
        @if (article.coverImage) {
          <figure class="w-full">
            <div class="w-full h-96 md:h-[500px] overflow-hidden bg-charcoal-200 dark:bg-charcoal-800">
              <img
                [src]="article.coverImage"
                [alt]="article.coverImageAlt"
                class="w-full h-full object-cover"
              />
            </div>
            @if (article.coverImageCaption) {
              <figcaption class="article-caption px-4 sm:px-6 lg:px-8 max-w-article mx-auto py-3">
                {{ article.coverImageCaption }}
              </figcaption>
            }
          </figure>
        }

        <!-- Article Content -->
        <div class="py-12 md:py-16">
          <div class="max-w-article mx-auto px-4 sm:px-6 lg:px-8">
            <div class="article-content">
              [innerHTML]="article.content"
            </div>

            <!-- Sources -->
            @if (article.sources && article.sources.length > 0) {
              <section class="mt-12 pt-12 border-t border-charcoal-200 dark:border-charcoal-700">
                <h2 class="section-header mb-6">Sources & References</h2>
                <ul class="space-y-3">
                  @for (source of article.sources; track source.title) {
                    <li class="text-sm text-charcoal-700 dark:text-ivory-300">
                      <strong>{{ source.title }}</strong>
                      @if (source.publisher) {
                        <span class="text-charcoal-500 dark:text-ivory-400">
                          — {{ source.publisher }}
                        </span>
                      }
                      @if (source.date) {
                        <span class="text-charcoal-500 dark:text-ivory-400">
                          ({{ source.date }})
                        </span>
                      }
                    </li>
                  }
                </ul>
              </section>
            }

            <!-- Tags -->
            @if (article.tags && article.tags.length > 0) {
              <div class="mt-12 pt-12 border-t border-charcoal-200 dark:border-charcoal-700">
                <h3 class="text-sm font-semibold text-charcoal-600 dark:text-ivory-400 mb-4 uppercase tracking-wide">
                  Tags
                </h3>
                <div class="flex flex-wrap gap-2">
                  @for (tag of article.tags; track tag) {
                    <a [routerLink]="['/articles']" [queryParams]="{ tag: tag }" class="tag hover:bg-charcoal-200 dark:hover:bg-charcoal-700 transition-colors">
                      {{ tag }}
                    </a>
                  }
                </div>
              </div>
            }

            <!-- Article Meta Bar -->
            <div class="mt-12 pt-8 border-t border-charcoal-200 dark:border-charcoal-700 flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <button
                  (click)="toggleBookmark()"
                  class="px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  [class.bg-gold-600]="isBookmarked"
                  [class.text-white]="isBookmarked"
                  [class.bg-charcoal-100]="!isBookmarked"
                  [class.dark:bg-charcoal-800]="!isBookmarked"
                  [class.text-charcoal-700]="!isBookmarked"
                  [class.dark:text-ivory-300]="!isBookmarked"
                  [attr.aria-label]="isBookmarked ? 'Remove bookmark' : 'Bookmark article'"
                >
                  @if (isBookmarked) {
                    ★ Bookmarked
                  } @else {
                    ☆ Bookmark
                  }
                </button>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-sm text-charcoal-600 dark:text-ivory-400">Share:</span>
                <a
                  [href]="shareLinks.facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
                  aria-label="Share on Facebook"
                >
                  f
                </a>
                <a
                  [href]="shareLinks.twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
                  aria-label="Share on X"
                >
                  𝕏
                </a>
                <a
                  [href]="shareLinks.whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  W
                </a>
                <button
                  (click)="copyLink()"
                  class="p-2 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
                  aria-label="Copy link"
                >
                  🔗
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Articles -->
        @if (relatedArticles && relatedArticles.length > 0) {
          <section class="py-12 md:py-16 bg-charcoal-50 dark:bg-charcoal-900/50 border-t border-charcoal-200 dark:border-charcoal-700">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 class="section-header mb-8">Related Articles</h2>
              <div class="grid md:grid-cols-3 gap-6">
                @for (relatedArticle of relatedArticles; track relatedArticle.id) {
                  <article class="card-editorial">
                    <a [routerLink]="['/articles', relatedArticle.slug]" class="overflow-hidden block">
                      <div class="relative aspect-video bg-charcoal-200 dark:bg-charcoal-700">
                        <img
                          [src]="relatedArticle.coverImage"
                          [alt]="relatedArticle.coverImageAlt"
                          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </a>
                    <div class="p-4">
                      <a [routerLink]="['/articles', relatedArticle.slug]">
                        <h3 class="font-display text-base font-bold text-charcoal-900 dark:text-ivory-100 hover:text-gold-600 transition-colors">
                          {{ relatedArticle.title }}
                        </h3>
                      </a>
                      <p class="text-charcoal-600 dark:text-ivory-400 text-sm mt-2">
                        {{ relatedArticle.readingTime }} min read
                      </p>
                    </div>
                  </article>
                }
              </div>
            </div>
          </section>
        }

        <!-- Navigation -->
        @if (previousArticle || nextArticle) {
          <nav class="py-12 md:py-16 border-t border-charcoal-200 dark:border-charcoal-700">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="grid md:grid-cols-2 gap-8">
                @if (previousArticle) {
                  <a
                    [routerLink]="['/articles', previousArticle.slug]"
                    class="group block p-6 rounded-lg border border-charcoal-200 dark:border-charcoal-700 hover:border-gold-500 dark:hover:border-gold-500 transition-all"
                  >
                    <span class="text-xs font-semibold text-charcoal-600 dark:text-ivory-400 uppercase tracking-wide">← Previous</span>
                    <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors mt-2">
                      {{ previousArticle.title }}
                    </h3>
                  </a>
                }
                @if (nextArticle) {
                  <a
                    [routerLink]="['/articles', nextArticle.slug]"
                    class="group block p-6 rounded-lg border border-charcoal-200 dark:border-charcoal-700 hover:border-gold-500 dark:hover:border-gold-500 transition-all text-right"
                  >
                    <span class="text-xs font-semibold text-charcoal-600 dark:text-ivory-400 uppercase tracking-wide">Next →</span>
                    <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors mt-2">
                      {{ nextArticle.title }}
                    </h3>
                  </a>
                }
              </div>
            </div>
          </nav>
        }
      </article>
    } @else {
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="editorial-title mb-4">Article Not Found</h1>
          <p class="text-charcoal-600 dark:text-ivory-400 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <a routerLink="/articles" class="btn-primary">Back to Articles</a>
        </div>
      </div>
    }
  `
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  article: Article | undefined;
  relatedArticles: Article[] = [];
  previousArticle: Article | undefined;
  nextArticle: Article | undefined;
  isBookmarked = false;
  readingProgress = 0;
  shareLinks = {
    facebook: '',
    twitter: '',
    whatsapp: ''
  };

  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const slug = params['slug'];
      this.article = this.articleService.getArticleBySlug(slug);

      if (this.article) {
        this.relatedArticles = this.articleService.getRelatedArticles(slug, 3);
        this.setupNavigation();
        this.setupShareLinks();
        this.checkBookmark();
        this.updateMetaTags();
        window.scrollTo(0, 0);
      }
    });

    window.addEventListener('scroll', () => this.updateReadingProgress());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    window.removeEventListener('scroll', () => this.updateReadingProgress());
  }

  private setupNavigation(): void {
    const allArticles = this.articleService.getLatestArticles(100);
    const currentIndex = allArticles.findIndex(a => a.id === this.article?.id);

    if (currentIndex > 0) {
      this.nextArticle = allArticles[currentIndex - 1];
    }
    if (currentIndex < allArticles.length - 1) {
      this.previousArticle = allArticles[currentIndex + 1];
    }
  }

  private setupShareLinks(): void {
    if (!this.article) return;

    const url = window.location.href;
    const title = this.article.title;
    const text = `${this.article.title} - Manetho`;

    this.shareLinks.facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    this.shareLinks.twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    this.shareLinks.whatsapp = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
  }

  private checkBookmark(): void {
    if (!this.article) return;
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    this.isBookmarked = bookmarks.includes(this.article.slug);
  }

  toggleBookmark(): void {
    if (!this.article) return;
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const index = bookmarks.indexOf(this.article.slug);

    if (index > -1) {
      bookmarks.splice(index, 1);
    } else {
      bookmarks.push(this.article.slug);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    this.isBookmarked = !this.isBookmarked;
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied to clipboard!');
    });
  }

  private updateReadingProgress(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.readingProgress = docHeight ? (scrollTop / docHeight) * 100 : 0;
  }

  private updateMetaTags(): void {
    if (!this.article) return;

    // Update SEO metadata
    this.seoService.updateMeta({
      title: this.article.title,
      description: this.article.excerpt,
      keywords: [...(this.article.tags || []), this.article.category].join(', '),
      image: this.article.coverImage,
      url: window.location.href,
      author: this.article.author.name,
      publishedDate: this.article.publishedAt,
      updatedDate: this.article.updatedAt,
      type: 'article'
    });

    // Add JSON-LD schema
    const articleSchema = this.seoService.createArticleSchema(this.article);
    this.seoService.addJsonLd(articleSchema);

    // Add breadcrumb schema
    const breadcrumbs = [
      { name: 'Home', url: 'https://manetho.io' },
      { name: 'Articles', url: 'https://manetho.io/articles' },
      { name: this.article.title, url: window.location.href }
    ];
    const breadcrumbSchema = this.seoService.createBreadcrumbSchema(breadcrumbs);
    this.seoService.addJsonLd(breadcrumbSchema);
  }
}
