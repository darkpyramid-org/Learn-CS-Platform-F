import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimelineEvent, TimelinePeriod } from '../models/timeline.model';
import { timelineEvents, timelinePeriods } from '../data/timeline';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private eventsSubject = new BehaviorSubject<TimelineEvent[]>(timelineEvents);
  private periodsSubject = new BehaviorSubject<TimelinePeriod[]>(timelinePeriods);

  events$ = this.eventsSubject.asObservable();
  periods$ = this.periodsSubject.asObservable();

  constructor() {}

  getAllEvents(): TimelineEvent[] {
    return timelineEvents;
  }

  getEvents(): Observable<TimelineEvent[]> {
    return this.events$;
  }

  getEventById(id: string): TimelineEvent | undefined {
    return timelineEvents.find(event => event.id === id);
  }

  getEventsByPeriod(period: string): TimelineEvent[] {
    return timelineEvents.filter(event => event.period === period);
  }

  getAllPeriods(): TimelinePeriod[] {
    return timelinePeriods;
  }

  getPeriods(): Observable<TimelinePeriod[]> {
    return this.periods$;
  }

  getPeriodBySlug(slug: string): TimelinePeriod | undefined {
    return timelinePeriods.find(period => period.slug === slug);
  }

  getPeriodById(id: string): TimelinePeriod | undefined {
    return timelinePeriods.find(period => period.id === id);
  }

  searchEvents(query: string): TimelineEvent[] {
    const lowerQuery = query.toLowerCase();
    return timelineEvents.filter(event =>
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.significance.toLowerCase().includes(lowerQuery)
    );
  }

  getEventsByYearRange(startYear: number, endYear: number): TimelineEvent[] {
    return timelineEvents.filter(event =>
      event.year >= startYear && event.year <= endYear
    );
  }

  getOrderedEvents(): TimelineEvent[] {
    return [...timelineEvents].sort((a, b) => a.year - b.year);
  }

  getOrderedPeriods(): TimelinePeriod[] {
    return [...timelinePeriods].sort((a, b) => a.startYear - b.startYear);
  }
}
