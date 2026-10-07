import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-charcoal-900 text-ivory-100 rounded-lg p-8 md:p-12">
      <div class="max-w-2xl mx-auto text-center">
        <h3 class="font-display text-2xl md:text-3xl font-bold mb-4">The Manetho Dispatch</h3>
        <p class="text-ivory-300 mb-8">New discoveries, historical stories, and insights from Ancient Egypt — delivered occasionally.</p>

        <form *ngIf="!submitted()" (ngSubmit)="onSubmit()" class="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            [(ngModel)]="email"
            name="email"
            placeholder="Enter your email"
            required
            class="flex-1 px-4 py-3 bg-charcoal-800 border border-charcoal-600 rounded-lg text-ivory-100 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          >
          <button type="submit" class="btn-gold whitespace-nowrap">Subscribe</button>
        </form>

        <p *ngIf="submitted()" class="text-gold-400 font-medium">Thank you for subscribing. Welcome to The Manetho Dispatch.</p>

        <p class="text-charcoal-400 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  `,
})
export class NewsletterComponent {
  email = '';
  submitted = signal(false);

  onSubmit() {
    if (this.email) {
      this.submitted.set(true);
    }
  }
}
