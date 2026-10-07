import { Injectable } from '@angular/core';
import { archaeologicalSites } from '../data/sites';
import { ArchaeologicalSite } from '../models/site.model';

@Injectable({ providedIn: 'root' })
export class SiteService {
  private sites = archaeologicalSites;

  getAll(): ArchaeologicalSite[] {
    return this.sites;
  }

  getBySlug(slug: string): ArchaeologicalSite | undefined {
    return this.sites.find(s => s.slug === slug);
  }
}
