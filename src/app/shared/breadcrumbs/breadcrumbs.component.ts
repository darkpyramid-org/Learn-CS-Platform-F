import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a routerLink="/">Home</a>
      <span *ngFor="let item of items; let isLast = last">
        <span class="mx-1">/</span>
        <a *ngIf="!isLast && item.link" [routerLink]="item.link">{{ item.label }}</a>
        <span *ngIf="isLast || !item.link" class="text-charcoal-900 dark:text-ivory-100">{{ item.label }}</span>
      </span>
    </nav>
  `,
})
export class BreadcrumbsComponent {
  @Input() items: { label: string; link?: string }[] = [];
}
