import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
  type?: 'article' | 'website' | 'person';
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://manetho.io';
  private defaultImage = 'https://manetho.io/og-image.jpg';

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {}

  updateMeta(metadata: SeoMetadata): void {
    // Set page title
    const fullTitle = metadata.title.includes('Manetho')
      ? metadata.title
      : `${metadata.title} — Manetho`;
    this.titleService.setTitle(fullTitle);

    // Set meta description
    this.updateMetaTag('description', metadata.description);
    this.updateMetaTag('keywords', metadata.keywords || 'Ancient Egypt, Pharaohs, Archaeology, History, Mythology');

    // Open Graph tags
    this.updateMetaTag('og:title', fullTitle, 'property');
    this.updateMetaTag('og:description', metadata.description, 'property');
    this.updateMetaTag('og:image', metadata.image || this.defaultImage, 'property');
    this.updateMetaTag('og:url', metadata.url || this.baseUrl, 'property');
    this.updateMetaTag('og:type', metadata.type || 'website', 'property');
    this.updateMetaTag('og:site_name', 'Manetho', 'property');

    // Twitter tags
    this.updateMetaTag('twitter:card', 'summary_large_image');
    this.updateMetaTag('twitter:title', fullTitle);
    this.updateMetaTag('twitter:description', metadata.description);
    this.updateMetaTag('twitter:image', metadata.image || this.defaultImage);

    // Article-specific tags
    if (metadata.type === 'article') {
      this.updateMetaTag('article:published_time', metadata.publishedDate || new Date().toISOString(), 'property');
      if (metadata.updatedDate) {
        this.updateMetaTag('article:modified_time', metadata.updatedDate, 'property');
      }
      if (metadata.author) {
        this.updateMetaTag('article:author', metadata.author, 'property');
      }
    }

    // Canonical URL
    const canonicalUrl = metadata.url || `${this.baseUrl}${window.location.pathname}`;
    this.updateCanonicalUrl(canonicalUrl);
  }

  private updateMetaTag(name: string, content: string, type: 'name' | 'property' = 'name'): void {
    const attribute = type === 'property' ? 'property' : 'name';
    let tag = this.metaService.getTag(`${attribute}="${name}"`);

    if (tag) {
      tag.setAttribute('content', content);
    } else {
      const newTag = document.createElement('meta');
      newTag.setAttribute(attribute, name);
      newTag.setAttribute('content', content);
      document.head.appendChild(newTag);
    }
  }

  private updateCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = url;
  }

  // Add JSON-LD structured data
  addJsonLd(data: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Create Article schema
  createArticleSchema(article: any): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.excerpt,
      image: article.coverImage,
      author: {
        '@type': 'Person',
        name: article.author.name
      },
      datePublished: article.publishedAt,
      ...(article.updatedAt && { dateModified: article.updatedAt })
    };
  }

  // Create Breadcrumb schema
  createBreadcrumbSchema(items: Array<{ name: string; url: string }>): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  // Create Person schema
  createPersonSchema(person: any): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: person.name,
      ...(person.role && { jobTitle: person.role }),
      ...(person.bio && { description: person.bio }),
      ...(person.avatar && { image: person.avatar })
    };
  }

  // Create Organization schema
  createOrganizationSchema(): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Manetho',
      url: this.baseUrl,
      logo: `${this.baseUrl}/logo.png`,
      description: 'A digital journal exploring Ancient Egypt through history, archaeology, mythology, and discovery.'
    };
  }
}
