import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pharaoh } from '../models/pharaoh.model';
import { pharaohs } from '../data/pharaohs';

@Injectable({
  providedIn: 'root'
})
export class PharaohService {
  private pharaohsSubject = new BehaviorSubject<Pharaoh[]>(pharaohs);
  pharaohs$ = this.pharaohsSubject.asObservable();

  constructor() {}

  getAllPharaohs(): Pharaoh[] {
    return pharaohs;
  }

  getPharaohs(): Observable<Pharaoh[]> {
    return this.pharaohs$;
  }

  getPharaohBySlug(slug: string): Pharaoh | undefined {
    return pharaohs.find(pharaoh => pharaoh.slug === slug);
  }

  getPharaohsByDynasty(dynasty: string): Pharaoh[] {
    return pharaohs.filter(pharaoh => pharaoh.dynasty === dynasty);
  }

  getPharaohsByPeriod(period: string): Pharaoh[] {
    return pharaohs.filter(pharaoh => pharaoh.period === period);
  }

  searchPharaohs(query: string): Pharaoh[] {
    const lowerQuery = query.toLowerCase();
    return pharaohs.filter(pharaoh =>
      pharaoh.name.toLowerCase().includes(lowerQuery) ||
      (pharaoh.throneName && pharaoh.throneName.toLowerCase().includes(lowerQuery)) ||
      pharaoh.dynasty.toLowerCase().includes(lowerQuery) ||
      pharaoh.period.toLowerCase().includes(lowerQuery)
    );
  }

  getDynasties(): string[] {
    const dynasties = new Set(pharaohs.map(pharaoh => pharaoh.dynasty));
    return Array.from(dynasties).sort();
  }

  getPeriods(): string[] {
    const periods = new Set(pharaohs.map(pharaoh => pharaoh.period));
    return Array.from(periods).sort();
  }

  getPharaohsByYearRange(startYear: number, endYear: number): Pharaoh[] {
    return pharaohs.filter(pharaoh => {
      const pharaohStart = parseInt(pharaoh.approximateDates.split('–')[0].replace(/[^\d-]/g, ''));
      const pharaohEnd = parseInt(pharaoh.approximateDates.split('–')[1]?.replace(/[^\d-]/g, '') || pharaohStart);
      return !(pharaohEnd < startYear || pharaohStart > endYear);
    });
  }
}
