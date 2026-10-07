import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ArchaeologicalSite } from '../models/site.model';
import { archaeologicalSites } from '../data/sites';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private sitesSubject = new BehaviorSubject<ArchaeologicalSite[]>(archaeologicalSites);
  sites$ = this.sitesSubject.asObservable();

  constructor() {}

  getAllSites(): ArchaeologicalSite[] {
    return archaeologicalSites;
  }

  getSites(): Observable<ArchaeologicalSite[]> {
    return this.sites$;
  }

  getSiteBySlug(slug: string): ArchaeologicalSite | undefined {
    return archaeologicalSites.find(site => site.slug === slug);
  }

  getSitesByPeriod(period: string): ArchaeologicalSite[] {
    return archaeologicalSites.filter(site => site.period.includes(period));
  }

  searchSites(query: string): ArchaeologicalSite[] {
    const lowerQuery = query.toLowerCase();
    return archaeologicalSites.filter(site =>
      site.name.toLowerCase().includes(lowerQuery) ||
      site.location.toLowerCase().includes(lowerQuery) ||
      site.description.toLowerCase().includes(lowerQuery) ||
      site.majorDiscoveries.some(discovery => discovery.toLowerCase().includes(lowerQuery))
    );
  }

  getPeriods(): string[] {
    const periods = new Set<string>();
    archaeologicalSites.forEach(site => {
      const matches = site.period.match(/(\w+\s+\w+|\w+)/g);
      matches?.forEach(match => periods.add(match));
    });
    return Array.from(periods).sort();
  }

  getSitesByLocation(location: string): ArchaeologicalSite[] {
    return archaeologicalSites.filter(site => site.location.toLowerCase().includes(location.toLowerCase()));
  }
}
