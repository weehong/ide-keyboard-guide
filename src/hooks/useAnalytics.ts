'use client';

import { useCallback, useEffect, useState } from 'react';

const SESSION_ID_KEY = 'analytics-session-id';

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return '';

  let sessionId = sessionStorage.getItem(SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem(SESSION_ID_KEY, sessionId);
  }
  return sessionId;
}

export function useAnalytics() {
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    setSessionId(getOrCreateSessionId());
  }, []);

  const trackSearch = useCallback(
    async (query: string, resultsCount: number) => {
      if (!query.trim() || !sessionId) return;

      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            feature: 'search',
            query: query.trim(),
            resultsCount,
            sessionId,
          }),
        });
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.debug('Analytics tracking failed:', error);
      }
    },
    [sessionId]
  );

  const trackAssistantQuery = useCallback(
    async (query: string) => {
      if (!query.trim() || !sessionId) return;

      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            feature: 'assistant',
            query: query.trim(),
            sessionId,
          }),
        });
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.debug('Analytics tracking failed:', error);
      }
    },
    [sessionId]
  );

  return {
    trackSearch,
    trackAssistantQuery,
    sessionId,
  };
}
