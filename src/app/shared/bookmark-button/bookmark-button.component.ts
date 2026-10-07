import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookmark-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggle()"
      class="p-2 rounded-lg transition-colors"
      [class.text-gold-500]="bookmarked()"
      [class.text-charcoal-400]="!bookmarked()"
      [class.dark:text-ivory-400]="!bookmarked()"
      [class.hover:bg-charcoal-100]="!bookmarked()"
      [class.dark:hover:bg-charcoal-800]="!bookmarked()"
      [attr.aria-label]="bookmarked() ? 'Remove bookmark' : 'Add bookmark'"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" [attr.fill]="bookmarked() ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    </button>
  `,
})
export class BookmarkButtonComponent {
  @Input() articleId = '';
  bookmarked = signal(false);

  toggle() {
    this.bookmarked.update(v => !v);
    const bookmarks = JSON.parse(localStorage.getItem('manetho-bookmarks') || '[]');
    if (this.bookmarked()) {
      bookmarks.push(this.articleId);
    } else {
      const index = bookmarks.indexOf(this.articleId);
      if (index > -1) bookmarks.splice(index, 1);
    }
    localStorage.setItem('manetho-bookmarks', JSON.stringify(bookmarks));
  }
}
