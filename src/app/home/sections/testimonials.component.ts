import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-28 overflow-hidden">
      <div class="glow-orb-cyan w-[500px] h-[500px] top-1/2 -translate-y-1/2 -right-48 opacity-15"></div>
      <div class="glow-orb-orange w-[400px] h-[400px] top-1/2 -translate-y-1/2 -left-32 opacity-10"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 animate-on-scroll">
          <span class="section-badge mb-5">Testimonials</span>
          <h2 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mt-4 mb-6">
            Loved by builders<br/>
            <span class="gradient-text-orange">worldwide.</span>
          </h2>
          <p class="max-w-xl mx-auto text-lg text-white/50">
            Hear from the engineers and founders who ship with Forge every day.
          </p>
        </div>

        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          @for (t of testimonials; track t.name; let i = $index) {
            <div class="glass-card p-7 break-inside-avoid animate-on-scroll group" [style.transition-delay]="(i * 80) + 'ms'">
              <div class="flex items-center gap-1 mb-4">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                }
              </div>

              <blockquote class="text-sm text-white/70 leading-relaxed mb-5">
                "{{ t.quote }}"
              </blockquote>

              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                     [style.background]="t.avatarBg">
                  {{ t.initials }}
                </div>
                <div>
                  <div class="text-sm font-semibold text-white">{{ t.name }}</div>
                  <div class="text-xs text-white/40">{{ t.role }} at {{ t.company }}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  testimonials = [
    {
      quote: 'Forge cut our deployment pipeline from 20 minutes to under 2. The team is shipping faster than ever and our infra costs dropped 40%.',
      name: 'Sarah Chen',
      role: 'VP Engineering',
      company: 'Meridian',
      initials: 'SC',
      avatarBg: 'linear-gradient(135deg, #f97316, #ef4444)',
    },
    {
      quote: "We migrated our entire prod infrastructure to Forge in a weekend. The zero-downtime deploys and automatic scaling are game-changers.",
      name: 'Marcus Reid',
      role: 'CTO',
      company: 'Stackflow',
      initials: 'MR',
      avatarBg: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
    },
    {
      quote: "As a solo founder, Forge lets me compete with teams 10x my size. I focus on the product; Forge handles everything else.",
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'LaunchPad',
      initials: 'PS',
      avatarBg: 'linear-gradient(135deg, #a78bfa, #ec4899)',
    },
    {
      quote: "The preview environments per PR feature alone has transformed our review process. Every PR now has a live, testable environment.",
      name: 'David Kim',
      role: 'Lead Developer',
      company: 'Velocity',
      initials: 'DK',
      avatarBg: 'linear-gradient(135deg, #34d399, #22d3ee)',
    },
    {
      quote: "We were skeptical about moving from our custom AWS setup, but Forge's performance and reliability exceeded all expectations.",
      name: 'Elena Vasquez',
      role: 'Principal Engineer',
      company: 'NovaTech',
      initials: 'EV',
      avatarBg: 'linear-gradient(135deg, #fb923c, #f97316)',
    },
    {
      quote: "The AI-powered anomaly detection caught a memory leak in production before any customer noticed. That alone justified the cost 10x over.",
      name: 'James Okafor',
      role: 'Platform Lead',
      company: 'Nexgen',
      initials: 'JO',
      avatarBg: 'linear-gradient(135deg, #f472b6, #a78bfa)',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    this.el.nativeElement.querySelectorAll('.animate-on-scroll').forEach((el: Element) => observer.observe(el));
  }
}
