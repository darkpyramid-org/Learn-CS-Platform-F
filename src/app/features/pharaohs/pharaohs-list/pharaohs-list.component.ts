import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PharaohService } from '../../../core/services/pharaoh.service';
import { Pharaoh } from '../../../core/models/pharaoh.model';
import { PharaohCardComponent } from '../../../shared/pharaoh-card/pharaoh-card.component';

@Component({
  selector: 'app-pharaohs-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, PharaohCardComponent],
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
          <h1 class="editorial-title mb-4">The Pharaohs</h1>
          <p class="text-lg text-charcoal-600 dark:text-ivory-400">
            Explore the lives, achievements, and legacies of Ancient Egypt's rulers
          </p>
        </div>
      </header>

      <!-- Filters -->
      <div class="bg-white dark:bg-charcoal-950 border-b border-charcoal-200 dark:border-charcoal-700 sticky top-16 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                placeholder="Search pharaohs..."
                class="search-input"
              />
            </div>

            <!-- Dynasty Filter -->
            <div>
              <label for="dynasty" class="block text-sm font-semibold text-charcoal-700 dark:text-ivory-300 mb-2">
                Dynasty
              </label>
              <select
                id="dynasty"
                [(ngModel)]="selectedDynasty"
                (ngModelChange)="onDynastyChange()"
                class="search-input"
              >
                <option value="">All Dynasties</option>
                @for (dynasty of dynasties; track dynasty) {
                  <option [value]="dynasty">{{ dynasty }}</option>
                }
              </select>
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
              @if (selectedDynasty) {
                <span class="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-900 dark:text-gold-200 rounded-full text-sm">
                  {{ selectedDynasty }}
                  <button (click)="clearDynasty()" class="hover:text-gold-700">✕</button>
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

      <!-- Pharaohs Grid -->
      <div class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          @if (filteredPharaohs.length > 0) {
            <div class="mb-8">
              <p class="text-charcoal-600 dark:text-ivory-400">
                Showing {{ filteredPharaohs.length }} @if (filteredPharaohs.length === 1) {pharaoh} @else {pharaohs}
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              @for (pharaoh of filteredPharaohs; track pharaoh.id) {
                <app-pharaoh-card [pharaoh]="pharaoh" />
              }
            </div>
          } @else {
            <div class="text-center py-16">
              <p class="text-lg text-charcoal-600 dark:text-ivory-400 mb-4">
                No pharaohs found matching your criteria.
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
export class PharaohsListComponent implements OnInit {
  pharaohs: Pharaoh[] = [];
  filteredPharaohs: Pharaoh[] = [];
  dynasties: string[] = [];
  periods: string[] = [];

  searchQuery = '';
  selectedDynasty = '';
  selectedPeriod = '';

  constructor(private pharaohService: PharaohService) {}

  ngOnInit(): void {
    this.pharaohs = this.pharaohService.getAllPharaohs();
    this.dynasties = this.pharaohService.getDynasties();
    this.periods = this.pharaohService.getPeriods();
    this.applyFilters();
  }

  onSearch(): void {
    this.applyFilters();
  }

  onDynastyChange(): void {
    this.applyFilters();
  }

  onPeriodChange(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    let filtered = [...this.pharaohs];

    // Apply search
    if (this.searchQuery) {
      filtered = filtered.filter(pharaoh =>
        pharaoh.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (pharaoh.throneName && pharaoh.throneName.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
        pharaoh.biography.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Apply dynasty filter
    if (this.selectedDynasty) {
      filtered = filtered.filter(pharaoh => pharaoh.dynasty === this.selectedDynasty);
    }

    // Apply period filter
    if (this.selectedPeriod) {
      filtered = filtered.filter(pharaoh => pharaoh.period === this.selectedPeriod);
    }

    this.filteredPharaohs = filtered;
  }

  hasActiveFilters(): boolean {
    return !!(this.searchQuery || this.selectedDynasty || this.selectedPeriod);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.applyFilters();
  }

  clearDynasty(): void {
    this.selectedDynasty = '';
    this.applyFilters();
  }

  clearPeriod(): void {
    this.selectedPeriod = '';
    this.applyFilters();
  }

  clearAllFilters(): void {
    this.searchQuery = '';
    this.selectedDynasty = '';
    this.selectedPeriod = '';
    this.applyFilters();
  }
}
