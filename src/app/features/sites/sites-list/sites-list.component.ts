import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteService } from '../../../core/services/site.service';
import { ArchaeologicalSite } from '../../../core/models/site.model';
import { SiteCardComponent } from '../../../shared/site-card/site-card.component';
import { BreadcrumbsComponent } from '../../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-sites-list',
  standalone: true,
  imports: [CommonModule, SiteCardComponent, BreadcrumbsComponent],
  template: `
    <div class="pt-16 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <app-breadcrumbs [items]="[{ label: 'Archaeological Sites' }]" />
        <div class="mt-8 mb-12">
          <h1 class="editorial-title">Archaeological Sites</h1>
          <p class="editorial-subtitle mt-4">Explore the ancient places that tell Egypt's story</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-site-card *ngFor="let site of sites()" [site]="site" />
        </div>
      </div>
    </div>
  `,
})
export class SitesListComponent implements OnInit {
  private siteService = inject(SiteService);
  sites = signal<ArchaeologicalSite[]>([]);

  ngOnInit() {
    this.sites.set(this.siteService.getAll());
  }
}
