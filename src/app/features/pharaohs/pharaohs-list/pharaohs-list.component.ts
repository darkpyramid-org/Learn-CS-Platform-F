import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PharaohService } from '../../../core/services/pharaoh.service';
import { Pharaoh } from '../../../core/models/pharaoh.model';
import { PharaohCardComponent } from '../../../shared/pharaoh-card/pharaoh-card.component';
import { BreadcrumbsComponent } from '../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-pharaohs-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PharaohCardComponent, BreadcrumbsComponent],
  template: `
    <div class="pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Pharaohs' }]" />
        <div class="mt-8 mb-12">
          <h1 class="editorial-title">The Pharaohs</h1>
          <p class="editorial-subtitle mt-4">Rulers of Ancient Egypt, from Narmer to Cleopatra</p>
        </div>

        <!-- Search -->
        <div class="mb-8">
          <input
            type="text"
            [(ngModel)]="searchQuery"
            placeholder="Search pharaohs by name or dynasty..."
            class="search-input"
          >
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <app-pharaoh-card *ngFor="let pharaoh of filteredPharaohs()" [pharaoh]="pharaoh" />
        </div>

        <div *ngIf="!filteredPharaohs().length" class="text-center py-16">
          <p class="text-charcoal-500 dark:text-ivory-400">No pharaohs found matching your search.</p>
        </div>
      </div>
    </div>
  `,
})
export class PharaohsListComponent implements OnInit {
  private pharaohService = inject(PharaohService);
  pharaohs = signal<Pharaoh[]>([]);
  searchQuery = '';

  filteredPharaohs() {
    if (!this.searchQuery) return this.pharaohs();
    const q = this.searchQuery.toLowerCase();
    return this.pharaohs().filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.dynasty.toLowerCase().includes(q) ||
      p.reign.toLowerCase().includes(q)
    );
  }

  ngOnInit() {
    this.pharaohs.set(this.pharaohService.getAll());
  }
}
