import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

interface NavLink {
  label: string;
  route: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 inset-x-0 z-50" aria-label="Main navigation">
      <!-- Floating shell: rounded pill at top, full-width bar with rounded corners when scrolled -->
      <div class="mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
           [ngClass]="scrolled()
             ? 'max-w-full'
             : 'max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)] mt-4'">
        <div class="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
             [ngClass]="scrolled()
                ? 'rounded-2xl border border-charcoal-200/80 dark:border-charcoal-800 bg-ivory-100/95 dark:bg-charcoal-950/95 backdrop-blur-md shadow-lg shadow-charcoal-900/5 dark:shadow-black/40'
                : 'rounded-2xl border border-charcoal-200/70 dark:border-charcoal-700/60 bg-ivory-100/85 dark:bg-charcoal-900/85 backdrop-blur-xl shadow-xl shadow-charcoal-900/10 dark:shadow-black/50'">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
              <!-- Logo -->
              <a routerLink="/" class="flex items-center group" aria-label="Manetho — Home">
                <span class="font-display text-2xl lg:text-3xl font-bold tracking-tight text-charcoal-900 dark:text-ivory-100 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors duration-300">
                  MANETHO
                </span>
              </a>

              <!-- Desktop Navigation -->
              <div class="hidden lg:flex items-center gap-1 xl:gap-2">
                <a *ngFor="let link of links"
                   [routerLink]="link.route"
                   routerLinkActive="nav-link-active"
                   [routerLinkActiveOptions]="{ exact: link.exact ?? false }"
                   class="nav-link">{{ link.label }}</a>
              </div>

              <!-- Right side -->
              <div class="hidden lg:flex items-center gap-1.5 xl:gap-2">
                <!-- Theme Toggle -->
                <button type="button" (click)="themeService.toggle()"
                        class="relative w-9 h-9 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all duration-200 hover:scale-110 active:scale-95"
                        [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
                  <!-- Moon icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 m-auto w-5 h-5 transition-all duration-300 ease-out"
                       [class.opacity-0.rotate-90.scale-75]="themeService.isDark()"
                       [class.opacity-100.rotate-0.scale-100]="!themeService.isDark()"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <!-- Sun icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 m-auto w-5 h-5 transition-all duration-300 ease-out"
                       [class.opacity-0.-rotate-90.scale-75]="!themeService.isDark()"
                       [class.opacity-100.rotate-0.scale-100]="themeService.isDark()"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </button>
                <!-- Search -->
                <a routerLink="/search" aria-label="Search"
                   class="w-9 h-9 flex items-center justify-center rounded-lg text-charcoal-600 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all duration-200 hover:scale-110 active:scale-95">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
                <!-- Newsletter CTA -->
                <a routerLink="/about" class="btn-gold hidden xl:inline-flex text-sm px-5 py-2 rounded-full">Newsletter</a>
              </div>

              <!-- Mobile controls -->
              <div class="flex lg:hidden items-center gap-1.5">
                <!-- Theme Toggle -->
                <button type="button" (click)="themeService.toggle()"
                        class="relative w-9 h-9 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all duration-200 hover:scale-110 active:scale-95"
                        [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
                  <!-- Moon icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 m-auto w-5 h-5 transition-all duration-300 ease-out"
                       [class.opacity-0.rotate-90.scale-75]="themeService.isDark()"
                       [class.opacity-100.rotate-0.scale-100]="!themeService.isDark()"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <!-- Sun icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 m-auto w-5 h-5 transition-all duration-300 ease-out"
                       [class.opacity-0.-rotate-90.scale-75]="!themeService.isDark()"
                       [class.opacity-100.rotate-0.scale-100]="themeService.isDark()"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </button>
                <!-- Mobile menu button -->
                <button type="button" (click)="toggleMobileMenu()"
                        class="relative w-9 h-9 flex items-center justify-center rounded-lg text-charcoal-600 dark:text-ivory-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all duration-200 hover:scale-110 active:scale-95"
                        [attr.aria-label]="mobileMenuOpen() ? 'Close menu' : 'Open menu'"
                        [attr.aria-expanded]="mobileMenuOpen()"
                        aria-controls="mobile-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path *ngIf="!mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    <path *ngIf="mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile Menu -->
          <div *ngIf="mobileMenuOpen()" id="mobile-menu"
               class="lg:hidden px-4 pt-1 pb-3 space-y-1"
               [ngClass]="scrolled()
                 ? 'border-t border-charcoal-200/80 dark:border-charcoal-800 bg-ivory-100/95 dark:bg-charcoal-950/95 rounded-b-2xl'
                 : 'border-t border-charcoal-200/70 dark:border-charcoal-700/60 bg-ivory-100/85 dark:bg-charcoal-900/85 rounded-b-2xl'">
            <a *ngFor="let link of links; let i = index"
               [routerLink]="link.route"
               (click)="closeMobileMenu()"
               routerLinkActive="nav-link-active"
               [routerLinkActiveOptions]="{ exact: link.exact ?? false }"
               class="mobile-nav-link animate-slide-down"
               [style.animation-delay.ms]="i * 45">{{ link.label }}</a>
            <a routerLink="/search" (click)="closeMobileMenu()"
               class="mobile-nav-link animate-slide-down"
               [style.animation-delay.ms]="links.length * 45">Search</a>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent implements OnInit {
  scrolled = signal(false);
  mobileMenuOpen = signal(false);
  themeService = inject(ThemeService);

  links: NavLink[] = [
    { label: 'Home', route: '/', exact: true },
    { label: 'Ancient Egypt', route: '/articles' },
    { label: 'Pharaohs', route: '/pharaohs' },
    { label: 'Archaeology', route: '/sites' },
    { label: 'Mythology', route: '/articles' },
    { label: 'Discoveries', route: '/articles' },
    { label: 'Timeline', route: '/timeline' },
    { label: 'About', route: '/about' },
  ];

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollState();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.mobileMenuOpen.set(false);
    }
  }

  private updateScrollState(): void {
    this.scrolled.set(window.scrollY > 10);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}