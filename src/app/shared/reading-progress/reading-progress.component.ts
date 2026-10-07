import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reading-progress" [style.width.%]="progress()"></div>
  `,
})
export class ReadingProgressComponent {
  progress = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  }
}
