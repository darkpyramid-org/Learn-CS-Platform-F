import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article.model';
import { ArticleCardComponent } from '../../../shared/article-card/article-card.component';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ArticleCardComponent],
  template: `
    @if (category) {
      <div class="min-h-screen">
        <!-- Header -->
        <header class="bg-charcoal-50 dark:bg-charcoal-900/50 py-12 md:py-16 border-b border-charcoal-200 dark:border-charcoal-700">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-4">
              <a routerLink="/articles" class="text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100">
                ← Back to Articles
              </a>
            </div>
            <div class="flex items-center gap-4 mb-4">
              <span class="text-5xl">{{ categoryEmoji }}</span>
              <h1 class="editorial-title">{{ category }}</h1>
            </div>
            <p class="text-lg text-charcoal-600 dark:text-ivory-400">
              {{ getCategoryDescription(category) }}
            </p>
          </div>
        </header>

        <!-- Articles Grid -->
        <div class="py-12 md:py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            @if (articles.length > 0) {
              <div class="mb-8">
                <p class="text-charcoal-600 dark:text-ivory-400">
                  {{ articles.length }} @if (articles.length === 1) {article} @else {articles} in this category
                </p>
              </div>

              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                @for (article of articles; track article.id) {
                  <app-article-card [article]="article" />
                }
              </div>
            } @else {
              <div class="text-center py-16">
                <p class="text-lg text-charcoal-600 dark:text-ivory-400 mb-8">
                  No articles found in this category yet.
                </p>
                <a routerLink="/articles" class="btn-primary">
                  Browse All Articles
                </a>
              </div>
            }
          </div>
        </div>

        <!-- Other Categories -->
        <section class="py-12 md:py-16 bg-charcoal-50 dark:bg-charcoal-900/50 border-t border-charcoal-200 dark:border-charcoal-700">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="section-header mb-8">Explore Other Categories</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (cat of otherCategories; track cat.name) {
                <a
                  [routerLink]="['/categories', cat.slug]"
                  class="group card-editorial p-8 text-center hover:shadow-lg transition-all"
                >
                  <div class="text-4xl mb-4">{{ cat.emoji }}</div>
                  <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors">
                    {{ cat.name }}
                  </h3>
                  <p class="text-charcoal-600 dark:text-ivory-400 text-sm">
                    {{ cat.description }}
                  </p>
                </a>
              }
            </div>
          </div>
        </section>
      </div>
    } @else {
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="editorial-title mb-4">Category Not Found</h1>
          <p class="text-charcoal-600 dark:text-ivory-400 mb-8">
            The category you're looking for doesn't exist.
          </p>
          <a routerLink="/articles" class="btn-primary">Back to Articles</a>
        </div>
      </div>
    }
  `
})
export class CategoryDetailComponent implements OnInit {
  category: string | null = null;
  categoryEmoji = '';
  articles: Article[] = [];
  otherCategories: { name: string; slug: string; description: string; emoji: string }[] = [];

  private categoryData = [
    {
      name: 'Ancient Egypt',
      slug: 'ancient-egypt',
      description: 'Civilization, society, government, and daily life',
      emoji: '🏺'
    },
    {
      name: 'Pharaohs',
      slug: 'pharaohs',
      description: 'Biographies and reigns of Egyptian rulers',
      emoji: '👑'
    },
    {
      name: 'Archaeology',
      slug: 'archaeology',
      description: 'Excavations, tombs, temples, and artifacts',
      emoji: '🔨'
    },
    {
      name: 'Mythology',
      slug: 'mythology',
      description: 'Gods, creation myths, rituals, and beliefs',
      emoji: '⚡'
    },
    {
      name: 'Discoveries',
      slug: 'discoveries',
      description: 'Recent archaeological findings and research',
      emoji: '✨'
    },
    {
      name: 'Artifacts',
      slug: 'artifacts',
      description: 'Important objects and their significance',
      emoji: '💎'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const categoryInfo = this.categoryData.find(c => c.slug === slug);

      if (categoryInfo) {
        this.category = categoryInfo.name;
        this.categoryEmoji = categoryInfo.emoji;
        this.articles = this.articleService.getArticlesByCategory(this.category);
        this.otherCategories = this.categoryData.filter(c => c.name !== this.category);
        window.scrollTo(0, 0);
      }
    });
  }

  getCategoryDescription(category: string): string {
    const categoryInfo = this.categoryData.find(c => c.name === category);
    return categoryInfo?.description || '';
  }
}
