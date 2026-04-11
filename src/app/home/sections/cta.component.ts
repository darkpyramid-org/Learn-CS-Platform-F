import { Component, AfterViewInit, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-40"></div>
      <div class="glow-orb-orange w-[800px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div class="glow-orb-cyan w-[500px] h-[400px] top-1/2 -translate-y-1/2 -right-48 opacity-15"></div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-on-scroll">
          <span class="section-badge mb-8">Get Started Today</span>

          <h2 class="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 mt-6">
            Ready to<br/>
            <span class="gradient-text-hero">forge the future?</span>
          </h2>

          <p class="text-lg sm:text-xl text-white/55 leading-relaxed mb-12 max-w-2xl mx-auto">
            Join 50,000+ engineers who've already made the switch. Deploy your first project in 90 seconds — no credit card needed.
          </p>

          @if (!submitted()) {
            <form (ngSubmit)="onSubmit()" class="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto mb-10">
              <input
                type="email"
                [(ngModel)]="email"
                name="email"
                placeholder="Enter your work email"
                required
                class="flex-1 px-5 py-4 rounded-full text-sm text-white placeholder-white/30 border border-white/[0.1] focus:outline-none focus:border-orange-500/60 transition-colors"
                style="background: rgba(255,255,255,0.04); backdrop-filter: blur(10px);"
              />
              <button type="submit" class="btn-primary py-4 px-8 text-sm whitespace-nowrap group">
                Start for free
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </form>
          } @else {
            <div class="flex items-center justify-center gap-3 mb-10 p-5 rounded-2xl border border-green-500/20 max-w-lg mx-auto" style="background: rgba(52,211,153,0.06)">
              <div class="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div class="text-left">
                <div class="text-sm font-semibold text-white">You're on the list!</div>
                <div class="text-xs text-white/50">We'll send you early access soon.</div>
              </div>
            </div>
          }

          <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-white/35">
            @for (trust of trustItems; track trust) {
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {{ trust }}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  email = '';
  submitted = signal(false);

  trustItems = ['No credit card required', 'Free plan forever', '90-second setup', 'Cancel anytime'];

  onSubmit() {
    if (this.email) {
      this.submitted.set(true);
    }
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.animate-on-scroll').forEach((el: Element) => observer.observe(el));
  }
}
