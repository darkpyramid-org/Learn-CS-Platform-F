import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-16 border-y border-white/[0.05] overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs font-semibold uppercase tracking-widest text-white/25 mb-10">
          Trusted by world-class engineering teams
        </p>
        <div class="relative overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-24 z-10" style="background: linear-gradient(to right, #07070f, transparent)"></div>
          <div class="absolute right-0 top-0 bottom-0 w-24 z-10" style="background: linear-gradient(to left, #07070f, transparent)"></div>
          <div class="flex items-center gap-16 logo-scroll">
            @for (logo of logos.concat(logos); track $index) {
              <div class="flex-shrink-0 flex items-center gap-2.5 opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default">
                <div class="w-7 h-7 rounded-lg flex items-center justify-center" [style.background]="logo.color">
                  <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="logo.icon"/>
                  </svg>
                </div>
                <span class="text-sm font-bold text-white whitespace-nowrap font-display">{{ logo.name }}</span>
              </div>
            }
          </div>
        </div>
      </div>

      <style>
        .logo-scroll {
          animation: logoScroll 30s linear infinite;
        }
        @keyframes logoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      </style>
    </section>
  `,
})
export class LogosComponent {
  logos = [
    { name: 'Vercel', color: '#000000', icon: 'M12 2L2 19.5h20L12 2z' },
    { name: 'Stripe', color: '#635BFF', icon: 'M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z' },
    { name: 'Shopify', color: '#96BF48', icon: 'M16 11c0-2.2-1.8-4-4-4s-4 1.8-4 4v1H6v8h12v-8h-2v-1z' },
    { name: 'Notion', color: '#ffffff', icon: 'M4 4h16v16H4z' },
    { name: 'Linear', color: '#5E6AD2', icon: 'M12 2L2 22h20L12 2z' },
    { name: 'Figma', color: '#F24E1E', icon: 'M12 2C9.8 2 8 3.8 8 6s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z' },
    { name: 'Loom', color: '#625DF5', icon: 'M12 2a10 10 0 100 20A10 10 0 0012 2z' },
    { name: 'Retool', color: '#FF4F00', icon: 'M3 3h18v18H3z' },
    { name: 'Sentry', color: '#362D59', icon: 'M12 2L2 19h20L12 2z' },
    { name: 'Datadog', color: '#632CA6', icon: 'M12 2a10 10 0 100 20A10 10 0 0012 2z' },
  ];
}
