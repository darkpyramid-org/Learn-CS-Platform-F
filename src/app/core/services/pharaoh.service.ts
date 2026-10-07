import { Injectable } from '@angular/core';
import { pharaohs } from '../data/pharaohs';
import { Pharaoh } from '../models/pharaoh.model';

@Injectable({ providedIn: 'root' })
export class PharaohService {
  private pharaohs = pharaohs;

  getAll(): Pharaoh[] {
    return this.pharaohs;
  }

  getBySlug(slug: string): Pharaoh | undefined {
    return this.pharaohs.find(p => p.slug === slug);
  }
}
