import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../core/services/search.service';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { ImgPlaceholderDirective } from '../../shared/img-placeholder/img-placeholder.directive';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, BreadcrumbsComponent, ImgPlaceholderDirective],
  template: `
    <div class="pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Search' }]" />
        <div class="mt-8 mb-12">
          <h1 class="editorial-title">Search</h1>
          <p class="editorial-subtitle mt-4">Search articles, pharaohs, sites, and more</p>
        </div>

        <!-- Search Input -->
        <div class="max-w-2xl mx-auto mb-12">
          <div class="relative">
            <input
              type="text"
              [(ngModel)]="query"
              (ngModelChange)="onSearch()"
              placeholder="Search for topics, people, places..."
              class="search-input pl-12"
              autofocus
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Results -->
        <div *ngIf="query.length > 0">
          <p class="text-sm text-charcoal-500 dark:text-ivory-400 mb-6">{{ resultsCount() }} results for "{{ query }}"</p>

          <!-- Articles -->
          <div *ngIf="articleResults().length" class="mb-12">
            <h2 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Articles</h2>
            <div class="space-y-4">
              <a *ngFor="let article of articleResults()" [routerLink]="['/articles', article.slug]" class="card-editorial p-4 flex gap-4 group block">
                <div class="w-20 h-20 rounded overflow-hidden flex-shrink-0 relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
                  <img
                    appImgPlaceholder
                    [appImgPlaceholder]="article.coverImage"
                    [alt]="article.coverImageAlt"
                    class="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
                    loading="lazy">
                  <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
                </div>
                <div>
                  <span class="tag text-xs">{{ article.category }}</span>
                  <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 mt-1 group-hover:text-gold-600 transition-colors">{{ article.title }}</h3>
                  <p class="text-sm text-charcoal-600 dark:text-ivory-300 line-clamp-1">{{ article.excerpt }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Pharaohs -->
          <div *ngIf="pharaohResults().length" class="mb-12">
            <h2 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Pharaohs</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a *ngFor="let pharaoh of pharaohResults()" [routerLink]="['/pharaohs', pharaoh.slug]" class="card-editorial p-4 flex gap-4 group block">
                <div class="w-16 h-16 rounded overflow-hidden flex-shrink-0 relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
                  <img
                    appImgPlaceholder
                    [appImgPlaceholder]="pharaoh.image"
                    [alt]="pharaoh.imageAlt"
                    class="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
                    loading="lazy">
                  <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors">{{ pharaoh.name }}</h3>
                  <p class="text-sm text-charcoal-500 dark:text-ivory-400">{{ pharaoh.dynasty }}</p>
                  <p class="text-xs text-charcoal-400 dark:text-ivory-500">{{ pharaoh.reign }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Sites -->
          <div *ngIf="siteResults().length" class="mb-12">
            <h2 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100 mb-4">Archaeological Sites</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a *ngFor="let site of siteResults()" [routerLink]="['/sites', site.slug]" class="card-editorial p-4 flex gap-4 group block">
                <div class="w-16 h-16 rounded overflow-hidden flex-shrink-0 relative bg-charcoal-100/50 dark:bg-charcoal-800/50">
                  <img
                    appImgPlaceholder
                    [appImgPlaceholder]="site.gallery[0]?.url"
                    [alt]="site.name"
                    class="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
                    loading="lazy">
                  <div class="absolute inset-0 animate-pulse bg-gradient-to-r from-charcoal-100 via-charcoal-200 to-charcoal-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800"></div>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 transition-colors">{{ site.name }}</h3>
                  <p class="text-sm text-charcoal-500 dark:text-ivory-400">{{ site.location | slice:0:40 }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Empty State -->
          <div *ngIf="resultsCount() === 0" class="text-center py-16">
            <p class="text-charcoal-500 dark:text-ivory-400 text-lg">No results found for "{{ query }}"</p>
            <p class="text-charcoal-400 dark:text-ivory-500 text-sm mt-2">Try searching for "Tutankhamun", "pyramids", "Nile", or "hieroglyphs"</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SearchComponent {
  private searchService = inject(SearchService);
  query = '';

  articleResults = signal<any[]>([]);
  pharaohResults = signal<any[]>([]);
  siteResults = signal<any[]>([]);

  resultsCount() {
    return this.articleResults().length + this.pharaohResults().length + this.siteResults().length;
  }

  onSearch() {
    const results = this.searchService.search(this.query);
    this.articleResults.set(results.articles);
    this.pharaohResults.set(results.pharaohs);
    this.siteResults.set(results.sites);
  }
}
