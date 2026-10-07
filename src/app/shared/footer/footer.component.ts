import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-charcoal-900 text-ivory-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <h3 class="font-display text-2xl font-bold text-ivory-100 mb-4">MANETHO</h3>
            <p class="text-ivory-400 text-sm leading-relaxed">
              A digital journal exploring Ancient Egypt through history, archaeology, mythology, and discovery.
            </p>
          </div>

          <!-- Navigation -->
          <div>
            <h4 class="font-sans text-sm font-semibold uppercase tracking-wider text-ivory-100 mb-4">Explore</h4>
            <ul class="space-y-2">
              <li><a routerLink="/articles" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Ancient Egypt</a></li>
              <li><a routerLink="/pharaohs" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Pharaohs</a></li>
              <li><a routerLink="/sites" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Archaeology</a></li>
              <li><a routerLink="/articles" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Mythology</a></li>
              <li><a routerLink="/articles" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Discoveries</a></li>
              <li><a routerLink="/timeline" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Timeline</a></li>
              <li><a routerLink="/about" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">About</a></li>
            </ul>
          </div>

          <!-- Editorial -->
          <div>
            <h4 class="font-sans text-sm font-semibold uppercase tracking-wider text-ivory-100 mb-4">Editorial</h4>
            <ul class="space-y-2">
              <li><a routerLink="/about" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Sources</a></li>
              <li><a routerLink="/about" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Editorial Policy</a></li>
              <li><a routerLink="/about" class="text-ivory-400 hover:text-ivory-100 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="font-sans text-sm font-semibold uppercase tracking-wider text-ivory-100 mb-4">The Manetho Dispatch</h4>
            <p class="text-ivory-400 text-sm mb-4">New discoveries, historical stories, and insights from Ancient Egypt — delivered occasionally.</p>
            <a routerLink="/about" class="btn-gold text-sm">Subscribe</a>
          </div>
        </div>

        <div class="border-t border-charcoal-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-ivory-500 text-sm">&copy; 2024 Manetho. All rights reserved.</p>
          <p class="text-ivory-500 text-sm">A digital publication dedicated to the study of Ancient Egypt.</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
