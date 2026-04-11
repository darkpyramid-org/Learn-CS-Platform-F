import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="how-it-works" class="relative py-28 overflow-hidden">
      <div class="absolute inset-0 grid-bg opacity-50"></div>
      <div class="glow-orb-orange w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-10"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 animate-on-scroll">
          <span class="section-badge mb-5">How Forge Works</span>
          <h2 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mt-4 mb-6">
            Ship in <span class="gradient-text-cyan">three steps.</span>
          </h2>
          <p class="max-w-xl mx-auto text-lg text-white/50">
            From code to production in minutes, not hours. Forge handles all the complexity.
          </p>
        </div>

        <div class="relative">
          <div class="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-px -translate-y-1/2" style="background: linear-gradient(to right, transparent, rgba(249,115,22,0.4), rgba(34,211,238,0.4), transparent)"></div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 relative">
            @for (step of steps; track step.number; let i = $index) {
              <div class="flex flex-col items-center text-center group animate-on-scroll" [style.transition-delay]="(i * 150) + 'ms'">
                <div class="relative mb-8">
                  <div class="w-20 h-20 rounded-2xl flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                       [style.background]="step.gradient"
                       [style.box-shadow]="step.glow"
                  >
                    <svg class="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" [attr.d]="step.icon"/>
                    </svg>
                  </div>
                  <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-dark-900 z-20"
                       [style.background]="step.gradient"
                  >{{ step.number }}</div>
                </div>

                <h3 class="font-display font-bold text-xl text-white mb-3 group-hover:gradient-text-orange transition-all">{{ step.title }}</h3>
                <p class="text-sm text-white/50 leading-relaxed max-w-xs">{{ step.description }}</p>

                <div class="mt-6 px-4 py-2 rounded-full text-xs font-mono border border-white/[0.08]" style="background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.5)">
                  {{ step.code }}
                </div>
              </div>
            }
          </div>
        </div>

        <div class="mt-20 p-8 rounded-3xl border border-white/[0.07] relative overflow-hidden animate-on-scroll" style="background: rgba(255,255,255,0.02)">
          <div class="glow-orb-orange w-64 h-64 -right-16 -top-16 opacity-20"></div>
          <div class="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 class="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                From zero to deployed in <span class="gradient-text-orange">90 seconds.</span>
              </h3>
              <p class="text-white/50">No credit card required. No infrastructure to manage.</p>
            </div>
            <a href="#" class="btn-primary text-base px-8 py-4 flex-shrink-0 group">
              Start building now
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HowItWorksComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  steps = [
    {
      number: '01',
      title: 'Connect your repository',
      description: 'Link your GitHub, GitLab, or Bitbucket repo. Forge automatically detects your framework and configures the build.',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
      glow: '0 0 40px rgba(249,115,22,0.3)',
      code: '$ git push origin main',
    },
    {
      number: '02',
      title: 'Forge builds instantly',
      description: 'Intelligent build system with smart caching. Your app is compiled, optimized, and deployed across our global edge network.',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
      gradient: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
      glow: '0 0 40px rgba(34,211,238,0.3)',
      code: '✓ Build complete in 1.2s',
    },
    {
      number: '03',
      title: 'Live on the global edge',
      description: 'Your app is live instantly. Share preview URLs, monitor performance, and push updates without any downtime.',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064',
      gradient: 'linear-gradient(135deg, #a78bfa, #ec4899)',
      glow: '0 0 40px rgba(167,139,250,0.3)',
      code: '→ yourapp.forge.dev',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    this.el.nativeElement.querySelectorAll('.animate-on-scroll').forEach((el: Element) => observer.observe(el));
  }
}
