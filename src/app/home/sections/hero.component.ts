import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="grid-bg absolute inset-0"></div>
      <div class="glow-orb-orange w-[700px] h-[700px] -top-48 left-1/2 -translate-x-1/2 opacity-40"></div>
      <div class="glow-orb-cyan w-[500px] h-[500px] top-1/2 -right-48 opacity-30 animate-float-slow"></div>
      <div class="glow-orb-orange w-[300px] h-[300px] bottom-1/4 -left-32 opacity-20 animate-float"></div>

      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070f]"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
        <div class="animate-fade-in" style="animation-delay: 0.1s">
          <span class="section-badge mb-8 inline-flex">
            <span class="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            Now in public beta &mdash; Join 50,000+ builders
          </span>
        </div>

        <h1 class="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl leading-[1.05] tracking-tight mb-8 animate-fade-up" style="animation: fadeUp 0.8s ease 0.2s both">
          <span class="block text-white mb-2">The platform that</span>
          <span class="block gradient-text-hero">ships at the speed</span>
          <span class="block text-white">of thought.</span>
        </h1>

        <p class="max-w-2xl mx-auto text-lg sm:text-xl text-white/55 leading-relaxed mb-12" style="animation: fadeUp 0.8s ease 0.4s both; opacity: 0; animation-fill-mode: forwards;">
          Forge turns your ideas into production-ready applications instantly. Build, deploy, and scale with a platform designed for teams who refuse to wait.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" style="animation: fadeUp 0.8s ease 0.5s both; opacity: 0; animation-fill-mode: forwards;">
          <a href="#" class="btn-primary text-base px-8 py-4 group">
            Start building for free
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
          <a href="#" class="btn-outline text-base px-8 py-4 group">
            <svg class="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Watch demo
          </a>
        </div>

        <div class="relative max-w-5xl mx-auto" style="animation: fadeUp 1s ease 0.7s both; opacity: 0; animation-fill-mode: forwards;">
          <div class="relative rounded-2xl overflow-hidden border border-white/[0.08]" style="box-shadow: 0 0 0 1px rgba(249,115,22,0.1), 0 40px 120px rgba(0,0,0,0.8), 0 0 80px rgba(249,115,22,0.08);">
            <div class="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]" style="background: rgba(255,255,255,0.03)">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div class="flex-1 flex justify-center">
                <div class="px-4 py-1 rounded-full text-xs text-white/30 border border-white/[0.06]" style="background: rgba(255,255,255,0.03)">
                  forge.dev/dashboard
                </div>
              </div>
              <div class="flex items-center gap-1.5">
                <div class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span class="text-xs text-green-400/80">Live</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.02);" class="p-6">
              <img
                src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Forge Platform Dashboard"
                class="w-full rounded-xl object-cover opacity-80"
                style="height: 420px; object-position: top;"
                loading="eager"
              />
              <div class="absolute inset-0 rounded-b-2xl bg-gradient-to-t from-[#07070f] via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div class="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3 hidden sm:flex">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <div class="text-xs font-semibold text-white">Deploy successful</div>
              <div class="text-xs text-white/40">Production &bull; 1.2s</div>
            </div>
          </div>

          <div class="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-3 hidden sm:flex">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <div class="text-xs font-semibold text-white">99.99% uptime</div>
              <div class="text-xs text-white/40">Last 90 days</div>
            </div>
          </div>
        </div>

        <div class="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          @for (stat of heroStats; track stat.label) {
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-extrabold font-display gradient-text-orange mb-1">{{ stat.value }}</div>
              <div class="text-xs text-white/40 uppercase tracking-wider">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  heroStats = [
    { value: '50K+', label: 'Active builders' },
    { value: '2M+', label: 'Deployments / month' },
    { value: '1.2s', label: 'Avg. deploy time' },
    { value: '99.99%', label: 'SLA uptime' },
  ];
}
