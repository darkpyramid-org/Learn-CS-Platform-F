export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverImageAlt: string;
  coverImageCaption?: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured?: boolean;
  sources?: Source[];
  relatedArticles?: string[];
}

export interface Author {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
}

export interface Source {
  title: string;
  publisher?: string;
  url?: string;
  date?: string;
}
