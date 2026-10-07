import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(false);

  constructor() {
    const saved = localStorage.getItem('manetho-theme');
    if (saved === 'dark') {
      this.isDark.set(true);
    } else if (saved === 'light') {
      this.isDark.set(false);
    } else {
      this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    effect(() => {
      const dark = this.isDark();
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('manetho-theme', dark ? 'dark' : 'light');
    });
  }

  toggle() {
    this.isDark.update(v => !v);
  }
}
