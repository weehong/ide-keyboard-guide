export type FeatureType = 'search' | 'assistant';

export interface AnalyticsEvent {
  id: string;
  timestamp: string;
  feature: FeatureType;
  sessionId: string;
}

export interface SearchEvent extends AnalyticsEvent {
  feature: 'search';
  query: string;
  resultsCount: number;
}

export interface AssistantQueryEvent extends AnalyticsEvent {
  feature: 'assistant';
  query: string;
}

export interface AnalyticsData {
  events: (SearchEvent | AssistantQueryEvent)[];
}

export interface AnalyticsSummary {
  totalSearches: number;
  totalAssistantQueries: number;
  searchQueries: string[];
  assistantQueries: string[];
}
