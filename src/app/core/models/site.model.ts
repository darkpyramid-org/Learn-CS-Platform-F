export interface ArchaeologicalSite {
  id: string;
  slug: string;
  name: string;
  location: string;
  period: string;
  historicalImportance: string;
  description: string;
  majorDiscoveries: string[];
  monuments: string[];
  timeline: string;
  relatedArticles: string[];
  gallery: SiteGalleryImage[];
}

export interface SiteGalleryImage {
  url: string;
  alt: string;
  caption?: string;
}
