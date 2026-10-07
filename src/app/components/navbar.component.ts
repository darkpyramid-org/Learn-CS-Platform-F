import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.scrolled]="isScrolled()"
      [style.background]="isScrolled() ? 'rgba(23,21,18,0.95)' : 'transparent'"
      [style.backdrop-filter]="isScrolled() ? 'blur(10px)' : 'none'"
      [style.border-bottom]="isScrolled() ? '1px solid rgba(255,255,255,0.05)' : 'none'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-2.5 group hover:opacity-80 transition-opacity">
            <div class="relative w-8 h-8 flex items-center justify-center">
              <span class="font-display text-xl font-bold text-gold-600">𓃭</span>
            </div>
            <span class="font-display text-xl font-bold tracking-wider bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              MANETHO
            </span>
          </a>

          <!-- Desktop Menu -->
          <ul class="hidden md:flex items-center gap-8">
            <li>
              <a
                routerLink="/"
                routerLinkActive="nav-link-active"
                [routerLinkActiveOptions]="{ exact: true }"
                class="nav-link"
              >
                Home
              </a>
            </li>
            <li>
              <a routerLink="/articles" routerLinkActive="nav-link-active" class="nav-link">
                Ancient Egypt
              </a>
            </li>
            <li class="relative group">
              <button class="nav-link flex items-center gap-1">
                Browse
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div class="absolute left-0 mt-0 w-48 bg-white dark:bg-charcoal-900 rounded-lg shadow-lg border border-charcoal-200 dark:border-charcoal-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a routerLink="/pharaohs" class="block px-4 py-3 text-sm text-charcoal-700 dark:text-ivory-300 hover:text-gold-600 hover:bg-charcoal-50 dark:hover:bg-charcoal-800 first:rounded-t-lg" (click)="menuOpen.set(false)">
                  Pharaohs
                </a>
                <a routerLink="/sites" class="block px-4 py-3 text-sm text-charcoal-700 dark:text-ivory-300 hover:text-gold-600 hover:bg-charcoal-50 dark:hover:bg-charcoal-800">
                  Archaeological Sites
                </a>
                <a routerLink="/timeline" class="block px-4 py-3 text-sm text-charcoal-700 dark:text-ivory-300 hover:text-gold-600 hover:bg-charcoal-50 dark:hover:bg-charcoal-800">
                  Timeline
                </a>
                <a routerLink="/articles" class="block px-4 py-3 text-sm text-charcoal-700 dark:text-ivory-300 hover:text-gold-600 hover:bg-charcoal-50 dark:hover:bg-charcoal-800 last:rounded-b-lg">
                  All Articles
                </a>
              </div>
            </li>
            <li>
              <a routerLink="/about" class="nav-link">
                About
              </a>
            </li>
          </ul>

          <!-- Right Side - Search & Newsletter & Mobile Menu Toggle -->
          <div class="flex items-center gap-3">
            <button
              class="hidden sm:block p-2 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
              aria-label="Search"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              class="md:hidden p-2 rounded-lg text-charcoal-600 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
              (click)="toggleMenu()"
              aria-label="Toggle menu"
            >
              @if (menuOpen()) {
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              } @else {
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              }
            </button>
          </div>
        </nav>

        <!-- Mobile Menu -->
        @if (menuOpen()) {
          <div class="md:hidden pb-6 pt-2 border-t border-charcoal-200 dark:border-charcoal-700">
            <ul class="flex flex-col gap-1">
              <li>
                <a
                  routerLink="/"
                  routerLinkActive="nav-link-active"
                  [routerLinkActiveOptions]="{ exact: true }"
                  class="block px-4 py-3 rounded text-sm font-medium text-charcoal-700 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
                  (click)="menuOpen.set(false)"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  routerLink="/articles"
                  routerLinkActive="nav-link-active"
                  class="block px-4 py-3 rounded text-sm font-medium text-charcoal-700 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
                  (click)="menuOpen.set(false)"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  routerLink="/pharaohs"
                  class="block px-4 py-3 rounded text-sm font-medium text-charcoal-700 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
                  (click)="menuOpen.set(false)"
                >
                  Pharaohs
                </a>
              </li>
              <li>
                <a
                  routerLink="/sites"
                  class="block px-4 py-3 rounded text-sm font-medium text-charcoal-700 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
                  (click)="menuOpen.set(false)"
                >
                  Sites
                </a>
              </li>
              <li>
                <a
                  routerLink="/timeline"
                  class="block px-4 py-3 rounded text-sm font-medium text-charcoal-700 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
                  (click)="menuOpen.set(false)"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-3 rounded text-sm font-medium text-charcoal-700 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-100 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-all"
                  (click)="menuOpen.set(false)"
                >
                  About
                </a>
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

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
