export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  period: string;
  description: string;
  significance: string;
  relatedArticles: string[];
}

export interface TimelinePeriod {
  id: string;
  name: string;
  slug: string;
  dateRange: string;
  startYear: number;
  endYear: number;
  description: string;
  characteristics: string[];
  color: string;
}
