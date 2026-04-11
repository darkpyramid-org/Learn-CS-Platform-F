import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="features" class="relative py-28 overflow-hidden">
      <div class="glow-orb-cyan w-[600px] h-[600px] top-1/2 -translate-y-1/2 -left-64 opacity-20"></div>
      <div class="glow-orb-orange w-[400px] h-[400px] top-1/2 -translate-y-1/2 -right-32 opacity-15"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 animate-on-scroll" #animRef>
          <span class="section-badge mb-5">Platform Features</span>
          <h2 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mt-4 mb-6">
            Everything you need to<br/>
            <span class="gradient-text-orange">build the future.</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">
            From instant deployments to intelligent scaling, Forge provides the full stack of tools modern teams demand.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (feature of features; track feature.title; let i = $index) {
            <div
              class="glass-card p-7 group animate-on-scroll"
              [style.transition-delay]="(i * 80) + 'ms'"
            >
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                   [style.background]="'rgba(' + feature.colorRgb + ', 0.12)'"
                   [style.border]="'1px solid rgba(' + feature.colorRgb + ', 0.2)'"
              >
                <svg class="w-6 h-6 transition-colors duration-300" [style.color]="feature.color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" [attr.d]="feature.icon"/>
                </svg>
              </div>

              <h3 class="font-display font-bold text-lg text-white mb-2.5 group-hover:text-orange-300 transition-colors duration-300">{{ feature.title }}</h3>
              <p class="text-sm text-white/50 leading-relaxed mb-4">{{ feature.description }}</p>

              <div class="flex items-center gap-2">
                <span class="text-xs font-medium px-2.5 py-1 rounded-full" [style.background]="'rgba(' + feature.colorRgb + ', 0.1)'" [style.color]="feature.color">
                  {{ feature.tag }}
                </span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  features = [
    {
      title: 'Instant Deployments',
      description: 'Push to git and watch your app go live in seconds. Zero config, zero downtime rolling deployments with instant rollbacks.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: '#f97316',
      colorRgb: '249,115,22',
      tag: '< 2s deploys',
    },
    {
      title: 'Auto-Scaling Infrastructure',
      description: 'Your app scales automatically with traffic. From zero to millions of requests with no manual intervention required.',
      icon: 'M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4',
      color: '#22d3ee',
      colorRgb: '34,211,238',
      tag: 'Global edge',
    },
    {
      title: 'Real-time Monitoring',
      description: 'Full observability stack built-in. Logs, metrics, traces, and alerts configured automatically for every deployment.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      color: '#a78bfa',
      colorRgb: '167,139,250',
      tag: 'Full observability',
    },
    {
      title: 'Team Collaboration',
      description: 'Preview environments per PR, shared secrets management, and granular RBAC for teams of any size.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      color: '#34d399',
      colorRgb: '52,211,153',
      tag: 'Unlimited seats',
    },
    {
      title: 'Edge Network',
      description: '300+ points of presence worldwide. Serve your users from the nearest node with sub-10ms latency globally.',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: '#fb923c',
      colorRgb: '251,146,60',
      tag: '300+ PoPs',
    },
    {
      title: 'AI-Powered Optimization',
      description: 'Intelligent build caching, automatic performance tuning, and AI-driven anomaly detection that learns your app.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      color: '#f472b6',
      colorRgb: '244,114,182',
      tag: 'AI-native',
    },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
