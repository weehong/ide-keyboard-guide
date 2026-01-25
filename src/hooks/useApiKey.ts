'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'deepseek-api-key';

export function useApiKey() {
  const [apiKey, setApiKeyState] = useState<string>('');
  const [hasGlobalKey, setHasGlobalKey] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for global API key from environment
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => {
        setHasGlobalKey(data.hasGlobalApiKey);
      })
      .catch(() => {
        // Ignore errors
      });

    // Check for user-stored API key
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setApiKeyState(stored);
    }
    setIsLoaded(true);
  }, []);

  const setApiKey = useCallback((key: string) => {
    setApiKeyState(key);
    if (key) {
      localStorage.setItem(STORAGE_KEY, key);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const clearApiKey = useCallback(() => {
    setApiKeyState('');
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    apiKey,
    setApiKey,
    clearApiKey,
    isLoaded,
    hasApiKey: !!apiKey || hasGlobalKey,
    hasGlobalKey,
  };
}
