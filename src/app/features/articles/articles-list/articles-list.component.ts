import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../../../core/services/article.service';
import { Article } from '../../../core/models/article.model';
import { ArticleCardComponent } from '../../../shared/article-card/article-card.component';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ArticleCardComponent],
  template: `
    <div class="min-h-screen">
      <!-- Header -->
      <header class="bg-charcoal-50 dark:bg-charcoal-900/50 py-12 md:py-16 border-b border-charcoal-200 dark:border-charcoal-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-4">
            <a routerLink="/" class="text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100">
              ← Back to Home
            </a>
          </div>
          <h1 class="editorial-title mb-4">Articles</h1>
          <p class="text-lg text-charcoal-600 dark:text-ivory-400">
            Explore our collection of historical articles about Ancient Egypt
          </p>
        </div>
      </header>

      <!-- Filters and Search -->
      <div class="bg-white dark:bg-charcoal-950 border-b border-charcoal-200 dark:border-charcoal-700 sticky top-16 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Search -->
            <div>
              <label for="search" class="block text-sm font-semibold text-charcoal-700 dark:text-ivory-300 mb-2">
                Search
              </label>
              <input
                id="search"
                type="text"
                [(ngModel)]="searchQuery"
                (ngModelChange)="onSearch()"
                placeholder="Search articles..."
                class="search-input"
              />
            </div>

            <!-- Category Filter -->
            <div>
              <label for="category" class="block text-sm font-semibold text-charcoal-700 dark:text-ivory-300 mb-2">
                Category
              </label>
              <select
                id="category"
                [(ngModel)]="selectedCategory"
                (ngModelChange)="onCategoryChange()"
                class="search-input"
              >
                <option value="">All Categories</option>
                @for (category of categories; track category) {
                  <option [value]="category">{{ category }}</option>
                }
              </select>
            </div>

            <!-- Tag Filter -->
            <div>
              <label for="tag" class="block text-sm font-semibold text-charcoal-700 dark:text-ivory-300 mb-2">
                Tag
              </label>
              <select
                id="tag"
                [(ngModel)]="selectedTag"
                (ngModelChange)="onTagChange()"
                class="search-input"
              >
                <option value="">All Tags</option>
                @for (tag of tags; track tag) {
                  <option [value]="tag">{{ tag }}</option>
                }
              </select>
            </div>

            <!-- Sort -->
            <div>
              <label for="sort" class="block text-sm font-semibold text-charcoal-700 dark:text-ivory-300 mb-2">
                Sort
              </label>
              <select
                id="sort"
                [(ngModel)]="sortBy"
                (ngModelChange)="onSortChange()"
                class="search-input"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="reading-time-asc">Reading Time (Short)</option>
                <option value="reading-time-desc">Reading Time (Long)</option>
              </select>
            </div>
          </div>

          <!-- Active Filters -->
          @if (hasActiveFilters()) {
            <div class="mt-4 flex items-center gap-2 flex-wrap">
              <span class="text-sm text-charcoal-600 dark:text-ivory-400">Active filters:</span>
              @if (searchQuery) {
                <span class="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-900 dark:text-gold-200 rounded-full text-sm">
                  Search: {{ searchQuery }}
                  <button (click)="clearSearch()" class="hover:text-gold-700">✕</button>
                </span>
              }
              @if (selectedCategory) {
                <span class="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-900 dark:text-gold-200 rounded-full text-sm">
                  {{ selectedCategory }}
                  <button (click)="clearCategory()" class="hover:text-gold-700">✕</button>
                </span>
              }
              @if (selectedTag) {
                <span class="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-900 dark:text-gold-200 rounded-full text-sm">
                  {{ selectedTag }}
                  <button (click)="clearTag()" class="hover:text-gold-700">✕</button>
                </span>
              }
              <button (click)="clearAllFilters()" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 font-medium">
                Clear All
              </button>
            </div>
          }
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          @if (filteredArticles.length > 0) {
            <div class="mb-8">
              <p class="text-charcoal-600 dark:text-ivory-400">
                Showing {{ filteredArticles.length }} @if (filteredArticles.length === 1) {article} @else {articles}
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              @for (article of filteredArticles; track article.id) {
                <app-article-card [article]="article" />
              }
            </div>
          } @else {
            <div class="text-center py-16">
              <p class="text-lg text-charcoal-600 dark:text-ivory-400 mb-4">
                No articles found matching your criteria.
              </p>
              <button (click)="clearAllFilters()" class="btn-primary">
                Clear filters and try again
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  categories: string[] = [];
  tags: string[] = [];

  searchQuery = '';
  selectedCategory = '';
  selectedTag = '';
  sortBy = 'newest';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articles = this.articleService.getAllArticles();
    this.categories = this.articleService.getCategories();
    this.tags = this.articleService.getTags();

    // Check for query parameters
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
      }
      if (params['tag']) {
        this.selectedTag = params['tag'];
      }
      this.applyFilters();
    });

    this.applyFilters();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onTagChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.articles];

    // Apply search
    if (this.searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(article => article.category === this.selectedCategory);
    }

    // Apply tag filter
    if (this.selectedTag) {
      filtered = filtered.filter(article => article.tags.includes(this.selectedTag));
    }

    // Apply sorting
    switch (this.sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case 'reading-time-asc':
        filtered.sort((a, b) => a.readingTime - b.readingTime);
        break;
      case 'reading-time-desc':
        filtered.sort((a, b) => b.readingTime - a.readingTime);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }

    this.filteredArticles = filtered;
  }

  hasActiveFilters(): boolean {
    return !!(this.searchQuery || this.selectedCategory || this.selectedTag || this.sortBy !== 'newest');
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  clearCategory(): void {
    this.selectedCategory = '';
    this.applyFilters();
  }

  clearTag(): void {
    this.selectedTag = '';
    this.applyFilters();
  }

  clearAllFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.selectedTag = '';
    this.sortBy = 'newest';
    this.applyFilters();
  }
}
