import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineService } from '../../core/services/timeline.service';
import { TimelineEvent, TimelinePeriod } from '../../core/models/timeline.model';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent],
  template: `
    <div class="pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Timeline' }]" />
        <div class="mt-8 mb-12">
          <h1 class="editorial-title">Timeline of Ancient Egypt</h1>
          <p class="editorial-subtitle mt-4">Three thousand years of history, from the first settlements to the Roman conquest</p>
        </div>

        <!-- Periods -->
        <div class="mb-16">
          <h2 class="section-header mb-8">Historical Periods</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let period of periods()" class="card-editorial p-6">
              <div class="w-3 h-3 rounded-full mb-4" [style.background-color]="period.color"></div>
              <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 mb-1">{{ period.name }}</h3>
              <p class="text-sm text-gold-600 font-medium mb-3">{{ period.dateRange }}</p>
              <p class="text-sm text-charcoal-600 dark:text-ivory-300 line-clamp-3">{{ period.description }}</p>
            </div>
          </div>
        </div>

        <!-- Events Timeline -->
        <div>
          <h2 class="section-header mb-8">Key Events</h2>
          <div class="relative">
            <div class="timeline-line"></div>
            <div class="space-y-12">
              <div *ngFor="let event of events(); let i = index" class="relative pl-12 md:pl-0">
                <div class="timeline-dot" [style.top.px]="8"></div>
                <div [class.md:ml-6]="i % 2 === 0" [class.md:mr-6]="i % 2 !== 0" [class.md:w-[calc(50%-1.5rem)]]="true" [class.md:ml-auto]="i % 2 !== 0">
                  <div class="card-editorial p-6">
                    <div class="text-sm text-gold-600 font-medium mb-2">{{ event.date }}</div>
                    <h3 class="font-display text-lg font-bold text-charcoal-900 dark:text-ivory-100 mb-2">{{ event.title }}</h3>
                    <p class="text-sm text-charcoal-600 dark:text-ivory-300 mb-3">{{ event.description }}</p>
                    <p class="text-xs text-charcoal-500 dark:text-ivory-400">{{ event.significance }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TimelineComponent implements OnInit {
  private timelineService = inject(TimelineService);
  periods = signal<TimelinePeriod[]>([]);
  events = signal<TimelineEvent[]>([]);

  ngOnInit() {
    this.periods.set(this.timelineService.getPeriods());
    this.events.set(this.timelineService.getEvents());
  }
}
