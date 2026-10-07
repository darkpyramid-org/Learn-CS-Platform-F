import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0" style="background: linear-gradient(180deg, #07070f 0%, #0a0a18 50%, #07070f 100%)"></div>
      <div class="glow-orb-orange w-[800px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px border border-white/[0.05] rounded-3xl overflow-hidden" style="background: rgba(255,255,255,0.04)">
          @for (stat of stats; track stat.label; let i = $index) {
            <div
              class="flex flex-col items-center text-center p-10 lg:p-14 animate-on-scroll"
              [style.background]="'rgba(7,7,15,0.7)'"
              [style.transition-delay]="(i * 100) + 'ms'"
            >
              <div class="text-4xl sm:text-5xl font-extrabold font-display mb-3" [class]="stat.gradient">
                {{ stat.value }}
              </div>
              <div class="text-sm font-semibold text-white/80 mb-2">{{ stat.label }}</div>
              <div class="text-xs text-white/35 flex items-center gap-1">
                <svg class="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
                {{ stat.change }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class StatsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  stats = [
    { value: '2M+', label: 'Deployments per month', change: '+34% vs last year', gradient: 'gradient-text-orange' },
    { value: '300ms', label: 'Global p99 latency', change: '60% faster', gradient: 'gradient-text-cyan' },
    { value: '99.99%', label: 'Platform uptime SLA', change: '0 incidents this year', gradient: 'gradient-text-orange' },
    { value: '$0', label: 'For hobby projects', change: 'Free forever tier', gradient: 'gradient-text-cyan' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll('.animate-on-scroll').forEach((el: Element) => observer.observe(el));
  }
}
