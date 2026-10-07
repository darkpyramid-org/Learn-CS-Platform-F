import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimelineService } from '../../core/services/timeline.service';
import { TimelineEvent, TimelinePeriod } from '../../core/models/timeline.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
          <h1 class="editorial-title mb-4">Timeline of Ancient Egypt</h1>
          <p class="text-lg text-charcoal-600 dark:text-ivory-400">
            Explore 6,000 years of Egyptian history from the Predynastic Period through Roman Egypt
          </p>
        </div>
      </header>

      <!-- Periods Navigation -->
      <div class="sticky top-16 z-30 bg-white dark:bg-charcoal-950 border-b border-charcoal-200 dark:border-charcoal-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex overflow-x-auto gap-2 py-4">
            <button
              (click)="selectedPeriodId = null"
              [class.active]="selectedPeriodId === null"
              class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
              [class.bg-gold-600]="selectedPeriodId === null"
              [class.text-white]="selectedPeriodId === null"
              [class.bg-charcoal-100]="selectedPeriodId !== null"
              [class.dark:bg-charcoal-800]="selectedPeriodId !== null"
              [class.text-charcoal-700]="selectedPeriodId !== null"
              [class.dark:text-ivory-300]="selectedPeriodId !== null"
            >
              All Periods
            </button>
            @for (period of periods; track period.id) {
              <button
                (click)="selectedPeriodId = period.id"
                [class.active]="selectedPeriodId === period.id"
                class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
                [class.bg-gold-600]="selectedPeriodId === period.id"
                [class.text-white]="selectedPeriodId === period.id"
                [class.bg-charcoal-100]="selectedPeriodId !== period.id"
                [class.dark:bg-charcoal-800]="selectedPeriodId !== period.id"
                [class.text-charcoal-700]="selectedPeriodId !== period.id"
                [class.dark:text-ivory-300]="selectedPeriodId !== period.id"
              >
                {{ period.name }}
              </button>
            }
          </div>
        </div>
      </div>

      <!-- Timeline Content -->
      <div class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Selected Period Details -->
          @if (selectedPeriod) {
            <div class="mb-16 p-8 rounded-lg bg-gradient-to-br from-charcoal-50 to-ivory-50 dark:from-charcoal-900/50 dark:to-charcoal-900/30 border border-charcoal-200 dark:border-charcoal-700">
              <div class="max-w-3xl">
                <div class="inline-block mb-4">
                  <span class="px-4 py-2 rounded-full text-sm font-semibold" [style.background-color]="selectedPeriod.color + '20'" [style.color]="selectedPeriod.color">
                    {{ selectedPeriod.dateRange }}
                  </span>
                </div>
                <h2 class="section-header mb-4">{{ selectedPeriod.name }}</h2>
                <p class="text-lg text-charcoal-700 dark:text-ivory-300 mb-6 leading-relaxed">
                  {{ selectedPeriod.description }}
                </p>
                @if (selectedPeriod.characteristics && selectedPeriod.characteristics.length > 0) {
                  <div>
                    <h3 class="font-semibold text-charcoal-900 dark:text-ivory-100 mb-3">Characteristics:</h3>
                    <ul class="space-y-2">
                      @for (characteristic of selectedPeriod.characteristics; track characteristic) {
                        <li class="flex items-start gap-2">
                          <span class="text-gold-600 mt-1">•</span>
                          <span class="text-charcoal-700 dark:text-ivory-300">{{ characteristic }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          }

          <!-- Timeline Events -->
          <div class="max-w-4xl">
            <h2 class="section-header mb-12">
              {{ selectedPeriodId ? 'Events in ' + selectedPeriod?.name : 'Major Events in Egyptian History' }}
            </h2>

            @if (filteredEvents.length > 0) {
              <div class="relative">
                <!-- Timeline Line -->
                <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 to-gold-600 dark:from-gold-600 dark:to-gold-700"></div>

                <!-- Events -->
                <div class="space-y-12">
                  @for (event of filteredEvents; track event.id) {
                    <div class="relative pl-16 md:pl-24">
                      <!-- Timeline Dot -->
                      <div class="timeline-dot absolute left-0 md:left-4"></div>

                      <!-- Event Card -->
                      <div class="card-editorial p-6">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                          <h3 class="font-display text-xl font-bold text-charcoal-900 dark:text-ivory-100">
                            {{ event.title }}
                          </h3>
                          <span class="text-sm font-semibold text-gold-600 whitespace-nowrap">
                            {{ event.date }}
                          </span>
                        </div>

                        <p class="text-charcoal-600 dark:text-ivory-400 mb-3">
                          {{ event.description }}
                        </p>

                        <p class="text-sm text-charcoal-500 dark:text-ivory-500 italic mb-4">
                          Significance: {{ event.significance }}
                        </p>

                        @if (event.relatedArticles && event.relatedArticles.length > 0) {
                          <div class="flex flex-wrap gap-2">
                            @for (articleSlug of event.relatedArticles; track articleSlug) {
                              <a
                                [routerLink]="['/articles', articleSlug]"
                                class="text-xs px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-900 dark:text-gold-200 rounded-full hover:bg-gold-200 dark:hover:bg-gold-900/50 transition-colors"
                              >
                                Related Article
                              </a>
                            }
                          </div>
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            } @else {
              <div class="text-center py-12">
                <p class="text-charcoal-600 dark:text-ivory-400">
                  No events found for the selected period.
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class TimelineComponent implements OnInit {
  periods: TimelinePeriod[] = [];
  events: TimelineEvent[] = [];
  filteredEvents: TimelineEvent[] = [];
  selectedPeriodId: string | null = null;
  selectedPeriod: TimelinePeriod | undefined;

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    this.periods = this.timelineService.getOrderedPeriods();
    this.events = this.timelineService.getOrderedEvents();
    this.applyFilters();
  }

  private applyFilters(): void {
    if (this.selectedPeriodId) {
      this.selectedPeriod = this.timelineService.getPeriodById(this.selectedPeriodId);
      this.filteredEvents = this.events.filter(event => event.period === this.selectedPeriod?.name);
    } else {
      this.selectedPeriod = undefined;
      this.filteredEvents = this.events;
    }
  }
}
