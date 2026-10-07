import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SiteService } from '../../../core/services/site.service';
import { ArchaeologicalSite } from '../../../core/models/site.model';
import { SiteCardComponent } from '../../../shared/site-card/site-card.component';

@Component({
  selector: 'app-sites-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SiteCardComponent],
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
          <h1 class="editorial-title mb-4">Archaeological Sites</h1>
          <p class="text-lg text-charcoal-600 dark:text-ivory-400">
            Discover the great temples, tombs, and monuments of Ancient Egypt
          </p>
        </div>
      </header>

      <!-- Filters -->
      <div class="bg-white dark:bg-charcoal-950 border-b border-charcoal-200 dark:border-charcoal-700 sticky top-16 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                placeholder="Search sites..."
                class="search-input"
              />
            </div>

            <!-- Period Filter -->
            <div>
              <label for="period" class="block text-sm font-semibold text-charcoal-700 dark:text-ivory-300 mb-2">
                Period
              </label>
              <select
                id="period"
                [(ngModel)]="selectedPeriod"
                (ngModelChange)="onPeriodChange()"
                class="search-input"
              >
                <option value="">All Periods</option>
                @for (period of periods; track period) {
                  <option [value]="period">{{ period }}</option>
                }
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
              @if (selectedPeriod) {
                <span class="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-900 dark:text-gold-200 rounded-full text-sm">
                  {{ selectedPeriod }}
                  <button (click)="clearPeriod()" class="hover:text-gold-700">✕</button>
                </span>
              }
              <button (click)="clearAllFilters()" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 font-medium">
                Clear All
              </button>
            </div>
          }
        </div>
      </div>

      <!-- Sites Grid -->
      <div class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          @if (filteredSites.length > 0) {
            <div class="mb-8">
              <p class="text-charcoal-600 dark:text-ivory-400">
                Showing {{ filteredSites.length }} @if (filteredSites.length === 1) {site} @else {sites}
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              @for (site of filteredSites; track site.id) {
                <app-site-card [site]="site" />
              }
            </div>
          } @else {
            <div class="text-center py-16">
              <p class="text-lg text-charcoal-600 dark:text-ivory-400 mb-4">
                No sites found matching your criteria.
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
export class SitesListComponent implements OnInit {
  sites: ArchaeologicalSite[] = [];
  filteredSites: ArchaeologicalSite[] = [];
  periods: string[] = [];

  searchQuery = '';
  selectedPeriod = '';

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.sites = this.siteService.getAllSites();
    this.periods = this.extractPeriods();
    this.applyFilters();
  }

  private extractPeriods(): string[] {
    const periodSet = new Set<string>();
    this.sites.forEach(site => {
      const matches = site.period.match(/(\w+\s+\w+|\w+)/g);
      matches?.forEach(match => periodSet.add(match));
    });
    return Array.from(periodSet).sort();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onPeriodChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.sites];

    // Apply search
    if (this.searchQuery) {
      filtered = filtered.filter(site =>
        site.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        site.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Apply period filter
    if (this.selectedPeriod) {
      filtered = filtered.filter(site => site.period.includes(this.selectedPeriod));
    }

    this.filteredSites = filtered;
  }

  hasActiveFilters(): boolean {
    return !!(this.searchQuery || this.selectedPeriod);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  clearPeriod(): void {
    this.selectedPeriod = '';
    this.applyFilters();
  }

  clearAllFilters(): void {
    this.searchQuery = '';
    this.selectedPeriod = '';
    this.applyFilters();
  }
}
