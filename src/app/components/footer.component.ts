import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="relative border-t border-white/[0.06] bg-dark-950/50 backdrop-blur-sm overflow-hidden">
      <div class="glow-orb-orange w-96 h-96 -bottom-48 left-1/4 opacity-20"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div class="lg:col-span-2">
            <a href="#" class="flex items-center gap-2.5 mb-5">
              <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-lg font-bold text-white font-display">Forge</span>
            </a>
            <p class="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              The modern platform for builders who move fast. Deploy with confidence, scale without limits.
            </p>
            <div class="flex items-center gap-4">
              @for (social of socials; track social.label) {
                <a
                  [href]="social.href"
                  [attr.aria-label]="social.label"
                  class="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all duration-200 hover:bg-white/[0.05]"
                >
                  <span [innerHTML]="social.icon" class="w-4 h-4"></span>
                </a>
              }
            </div>
          </div>

          @for (col of footerLinks; track col.title) {
            <div>
              <h4 class="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">{{ col.title }}</h4>
              <ul class="space-y-3">
                @for (link of col.links; track link.label) {
                  <li>
                    <a href="#" class="text-sm text-white/55 hover:text-white transition-colors duration-200">{{ link.label }}</a>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <div class="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-white/30">
            &copy; {{ currentYear }} Forge, Inc. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <a href="#" class="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" class="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" class="text-xs text-white/30 hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socials = [
    {
      label: 'Twitter',
      href: '#',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.858L1.25 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    },
    {
      label: 'GitHub',
      href: '#',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
    },
    {
      label: 'Discord',
      href: '#',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>',
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    },
  ];

  footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features' },
        { label: 'Pricing' },
        { label: 'Changelog' },
        { label: 'Roadmap' },
        { label: 'Status' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { label: 'Documentation' },
        { label: 'API Reference' },
        { label: 'CLI' },
        { label: 'Integrations' },
        { label: 'Open Source' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About' },
        { label: 'Blog' },
        { label: 'Careers' },
        { label: 'Press' },
        { label: 'Contact' },
      ],
    },
  ];
}
