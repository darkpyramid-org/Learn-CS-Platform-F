import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class.scrolled]="isScrolled()"
      [style.background]="isScrolled() ? 'rgba(7,7,15,0.85)' : 'transparent'"
      [style.backdrop-filter]="isScrolled() ? 'blur(20px)' : 'none'"
      [style.border-bottom]="isScrolled() ? '1px solid rgba(255,255,255,0.07)' : 'none'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
          <a href="#" class="flex items-center gap-2.5 group">
            <div class="relative w-8 h-8 flex items-center justify-center">
              <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <svg class="relative w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="text-lg font-bold text-white tracking-tight font-display">Forge</span>
          </a>

          <ul class="hidden md:flex items-center gap-1">
            @for (link of navLinks; track link.label) {
              <li>
                <a
                  [href]="link.href"
                  class="px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                >{{ link.label }}</a>
              </li>
            }
          </ul>

          <div class="flex items-center gap-3">
            <a href="#" class="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 px-4 py-2">
              Sign in
            </a>
            <a href="#" class="btn-primary text-sm px-5 py-2.5">
              Get started free
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>

            <button
              class="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
              (click)="toggleMenu()"
              aria-label="Toggle menu"
            >
              @if (menuOpen()) {
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              } @else {
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              }
            </button>
          </div>
        </nav>

        @if (menuOpen()) {
          <div class="md:hidden pb-6 pt-2 border-t border-white/[0.06]">
            <ul class="flex flex-col gap-1">
              @for (link of navLinks; track link.label) {
                <li>
                  <a
                    [href]="link.href"
                    class="block px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
                    (click)="menuOpen.set(false)"
                  >{{ link.label }}</a>
                </li>
              }
              <li class="pt-2">
                <a href="#" class="btn-primary w-full justify-center">Get started free</a>
              </li>
            </ul>
          </div>
        }
      </div>
    </header>
  `,
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
