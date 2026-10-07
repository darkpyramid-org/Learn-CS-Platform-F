import { Injectable } from '@angular/core';
import { timelinePeriods, timelineEvents } from '../data/timeline';
import { TimelineEvent, TimelinePeriod } from '../models/timeline.model';

@Injectable({ providedIn: 'root' })
export class TimelineService {
  getPeriods(): TimelinePeriod[] {
    return timelinePeriods;
  }

  getEvents(): TimelineEvent[] {
    return timelineEvents;
  }
}
