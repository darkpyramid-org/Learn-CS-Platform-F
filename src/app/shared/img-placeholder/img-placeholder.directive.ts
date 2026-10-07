import { Directive, HostBinding, HostListener, Input, signal, computed, effect } from '@angular/core';

@Directive({
  selector: 'img[appImgPlaceholder]',
  standalone: true,
})
export class ImgPlaceholderDirective {
  @Input() appImgPlaceholder: string | undefined = '';
  @Input() appImgBlurhash = '';

  @HostBinding('src') src = '';
  @HostBinding('class') className = '';
  @HostBinding('style.filter') filter = '';

  private originalSrc = '';
  private hasError = false;
  private hasLoaded = signal(false);

  @HostListener('load')
  onLoad() {
    this.hasLoaded.set(true);
    this.updateStyles();
  }

  @HostListener('error')
  onError() {
    if (!this.hasError) {
      this.hasError = true;
      this.src = '/placeholder.svg';
      this.updateStyles();
    }
  }

  private updateStyles() {
    if (this.hasLoaded() && !this.hasError) {
      this.className = 'opacity-100';
      this.filter = 'none';
    } else if (this.hasError) {
      this.className = 'opacity-100';
      this.filter = 'none';
    } else {
      // Loading state - show blur placeholder
      this.className = 'opacity-100';
      if (this.appImgBlurhash) {
        this.filter = `blur(20px)`;
      } else {
        // Use placeholder as LQIP
        this.filter = 'blur(20px)';
      }
    }
  }

  ngOnInit() {
    this.originalSrc = this.appImgPlaceholder ?? '';
    this.src = this.appImgPlaceholder ?? '';
    this.updateStyles();

    // Reset filter after load (transition handled by CSS)
    effect(() => {
      if (this.hasLoaded()) {
        // Allow one frame for the image to render, then remove blur
        setTimeout(() => this.updateStyles(), 50);
      }
    });
  }
}