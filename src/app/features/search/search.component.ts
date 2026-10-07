import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService, SearchResult } from '../../core/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
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
          <h1 class="editorial-title mb-4">Search Manetho</h1>
          <p class="text-lg text-charcoal-600 dark:text-ivory-400">
            Find articles, pharaohs, archaeological sites, and more
          </p>
        </div>
      </header>

      <!-- Search Form -->
      <div class="bg-white dark:bg-charcoal-950 border-b border-charcoal-200 dark:border-charcoal-700 sticky top-16 z-30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex gap-2">
            <div class="flex-1">
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (keyup.enter)="onSearch()"
                placeholder="Search articles, pharaohs, sites..."
                class="search-input w-full"
                autofocus
              />
            </div>
            <button (click)="onSearch()" class="btn-primary px-8">
              Search
            </button>
          </div>

          <!-- Recent Searches -->
          @if (!searchQuery && recentSearches.length > 0) {
            <div class="mt-6">
              <p class="text-sm font-semibold text-charcoal-700 dark:text-ivory-300 mb-3">Recent Searches</p>
              <div class="flex flex-wrap gap-2">
                @for (search of recentSearches; track search) {
                  <button
                    (click)="selectRecentSearch(search)"
                    class="px-3 py-1 text-sm rounded-full bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300 hover:bg-charcoal-200 dark:hover:bg-charcoal-700 transition-colors"
                  >
                    {{ search }}
                  </button>
                }
                <button
                  (click)="clearRecentSearches()"
                  class="px-3 py-1 text-sm rounded-full bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Results -->
      <div class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          @if (hasSearched) {
            @if (results.length > 0) {
              <div class="mb-8">
                <p class="text-charcoal-600 dark:text-ivory-400">
                  Found {{ results.length }} @if (results.length === 1) {result} @else {results} for "{{ lastQuery }}"
                </p>
              </div>

              <!-- Results by Type -->
              @for (type of resultTypes; track type) {
                @if (getResultsByType(type).length > 0) {
                  <section class="mb-12">
                    <h2 class="section-header mb-6 capitalize">{{ getTypeLabel(type) }}</h2>
                    <div class="grid gap-6">
                      @for (result of getResultsByType(type); track result.title) {
                        <div class="card-editorial p-6 hover:shadow-lg transition-all">
                          <div class="flex gap-6">
                            @if (result.image) {
                              <img
                                [src]="result.image"
                                [alt]="result.title"
                                class="w-24 h-24 rounded object-cover flex-shrink-0"
                              />
                            }
                            <div class="flex-1">
                              <a [href]="getResultLink(result)" class="group">
                                <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 mb-2 group-hover:text-gold-600 transition-colors">
                                  {{ result.title }}
                                </h3>
                              </a>
                              @if (result.excerpt) {
                                <p class="text-charcoal-600 dark:text-ivory-400 text-sm mb-3">
                                  {{ result.excerpt }}
                                </p>
                              }
                              <div class="flex items-center justify-between">
                                <span class="text-xs text-charcoal-500 dark:text-ivory-500 capitalize">
                                  {{ getTypeLabel(result.type) }}
                                </span>
                                @if (result.category) {
                                  <span class="text-xs px-2 py-1 bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-300 rounded">
                                    {{ result.category }}
                                  </span>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </section>
                }
              }
            } @else {
              <div class="text-center py-16">
                <p class="text-lg text-charcoal-600 dark:text-ivory-400 mb-8">
                  No results found for "{{ lastQuery }}"
                </p>
                <div class="flex gap-4 justify-center flex-wrap">
                  <button
                    (click)="searchQuery = ''; onSearch()"
                    class="btn-outline"
                  >
                    Clear Search
                  </button>
                  <a routerLink="/" class="btn-primary">
                    Back to Home
                  </a>
                </div>
              </div>
            }
          } @else {
            <div class="text-center py-16">
              <p class="text-charcoal-600 dark:text-ivory-400 mb-8">
                Enter a search term to explore Manetho
              </p>
              <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <a
                  routerLink="/articles"
                  class="card-editorial p-6 hover:shadow-lg transition-all text-center"
                >
                  <div class="text-3xl mb-3">📄</div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">
                    Articles
                  </h3>
                  <p class="text-sm text-charcoal-600 dark:text-ivory-400">
                    Browse all articles
                  </p>
                </a>
                <a
                  routerLink="/pharaohs"
                  class="card-editorial p-6 hover:shadow-lg transition-all text-center"
                >
                  <div class="text-3xl mb-3">👑</div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">
                    Pharaohs
                  </h3>
                  <p class="text-sm text-charcoal-600 dark:text-ivory-400">
                    Explore rulers
                  </p>
                </a>
                <a
                  routerLink="/sites"
                  class="card-editorial p-6 hover:shadow-lg transition-all text-center"
                >
                  <div class="text-3xl mb-3">🏛️</div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">
                    Sites
                  </h3>
                  <p class="text-sm text-charcoal-600 dark:text-ivory-400">
                    Archaeological sites
                  </p>
                </a>
                <a
                  routerLink="/timeline"
                  class="card-editorial p-6 hover:shadow-lg transition-all text-center"
                >
                  <div class="text-3xl mb-3">📅</div>
                  <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-2">
                    Timeline
                  </h3>
                  <p class="text-sm text-charcoal-600 dark:text-ivory-400">
                    Historical periods
                  </p>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class SearchComponent implements OnInit {
  searchQuery = '';
  lastQuery = '';
  results: SearchResult[] = [];
  recentSearches: string[] = [];
  hasSearched = false;
  resultTypes: SearchResult['type'][] = ['article', 'pharaoh', 'site', 'category', 'tag'];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recentSearches = this.searchService.getRecentSearches();

    // Check for query parameter
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchQuery = params['q'];
        this.onSearch();
      }
    });
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.results = [];
      this.hasSearched = false;
      return;
    }

    this.lastQuery = this.searchQuery;
    this.results = this.searchService.search(this.searchQuery);
    this.searchService.addRecentSearch(this.searchQuery);
    this.recentSearches = this.searchService.getRecentSearches();
    this.hasSearched = true;
  }

  selectRecentSearch(search: string): void {
    this.searchQuery = search;
    this.onSearch();
  }

  clearRecentSearches(): void {
    this.searchService.clearRecentSearches();
    this.recentSearches = [];
  }

  getResultsByType(type: SearchResult['type']): SearchResult[] {
    return this.results.filter(r => r.type === type);
  }

  getTypeLabel(type: SearchResult['type']): string {
    const labels: { [key in SearchResult['type']]: string } = {
      'article': 'Articles',
      'pharaoh': 'Pharaohs',
      'site': 'Archaeological Sites',
      'category': 'Categories',
      'tag': 'Tags'
    };
    return labels[type] || type;
  }

  getResultLink(result: SearchResult): string {
    switch (result.type) {
      case 'article':
        return `/articles/${result.slug}`;
      case 'pharaoh':
        return `/pharaohs/${result.slug}`;
      case 'site':
        return `/sites/${result.slug}`;
      case 'category':
        return `/articles?category=${result.slug}`;
      case 'tag':
        return `/articles?tag=${result.slug}`;
      default:
        return '#';
    }
  }
}
