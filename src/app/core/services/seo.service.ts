import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  setCanonical(url: string) {
    this.meta.updateTag({ rel: 'canonical', href: url });
  }

  setOpenGraph(tags: Record<string, string>) {
    Object.entries(tags).forEach(([key, value]) => {
      this.meta.updateTag({ property: `og:${key}`, content: value });
    });
  }

  setTwitter(tags: Record<string, string>) {
    Object.entries(tags).forEach(([key, value]) => {
      this.meta.updateTag({ name: `twitter:${key}`, content: value });
    });
  }

  setJsonLd(data: object) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }
}
