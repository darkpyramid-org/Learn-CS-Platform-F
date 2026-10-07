import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="border-t border-charcoal-200 dark:border-charcoal-700 bg-ivory-50 dark:bg-charcoal-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <!-- Branding -->
          <div class="lg:col-span-2">
            <a routerLink="/" class="flex items-center gap-2.5 mb-5">
              <span class="font-display text-2xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
                MANETHO
              </span>
            </a>
            <p class="text-charcoal-600 dark:text-ivory-400 text-sm leading-relaxed mb-6 max-w-sm">
              A digital journal exploring Ancient Egypt through history, archaeology, mythology, and discovery.
            </p>
            <div class="flex items-center gap-3">
              <a
                href="#"
                aria-label="X"
                class="w-9 h-9 rounded-full flex items-center justify-center border border-charcoal-300 dark:border-charcoal-600 text-charcoal-600 dark:text-ivory-400 hover:text-gold-600 hover:border-gold-600 transition-all"
              >
                X
              </a>
              <a
                href="#"
                aria-label="Facebook"
                class="w-9 h-9 rounded-full flex items-center justify-center border border-charcoal-300 dark:border-charcoal-600 text-charcoal-600 dark:text-ivory-400 hover:text-gold-600 hover:border-gold-600 transition-all"
              >
                f
              </a>
            </div>
          </div>

          <!-- Explore -->
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-widest text-charcoal-600 dark:text-ivory-400 mb-5">
              Explore
            </h4>
            <ul class="space-y-3">
              <li>
                <a routerLink="/articles" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a routerLink="/pharaohs" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Pharaohs
                </a>
              </li>
              <li>
                <a routerLink="/sites" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Archaeological Sites
                </a>
              </li>
              <li>
                <a routerLink="/timeline" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          <!-- Learn -->
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-widest text-charcoal-600 dark:text-ivory-400 mb-5">
              Learn
            </h4>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Editorial Philosophy
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Sources
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-widest text-charcoal-600 dark:text-ivory-400 mb-5">
              Legal
            </h4>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-charcoal-600 dark:text-ivory-400 hover:text-charcoal-900 dark:hover:text-ivory-100 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div class="border-t border-charcoal-200 dark:border-charcoal-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-charcoal-500 dark:text-ivory-500">
            &copy; {{ currentYear }} Manetho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
