'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { shortcutCategories, searchShortcuts } from '@/data/shortcuts';
import { commandLineCategories, searchCommandLineShortcuts } from '@/data/commandLineShortcuts';
import {
  CategorySection,
  SearchBar,
  SearchResults,
  ChatWindow,
  ChatToggleButton,
  SettingsPanel,
  ModeSelection,
  CommandLineCategorySection,
  CommandLineSearchResults
} from '@/components';
import { useApiKey, useAnalytics } from '@/hooks';
import {
  Shortcut,
  ShortcutCategory,
  CommandLineShortcut,
  CommandLineCategory,
  OS,
  ShortcutMode
} from '@/types/shortcuts';

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<ShortcutMode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<
    { shortcut: Shortcut; category: ShortcutCategory }[]
  >([]);
  const [commandLineSearchResults, setCommandLineSearchResults] = useState<
    { shortcut: CommandLineShortcut; category: CommandLineCategory }[]
  >([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [highlightIDE, setHighlightIDE] = useState<
    'intellij' | 'visualStudio' | null
  >(null);
  const [os, setOS] = useState<OS>('windows');

  const { apiKey, setApiKey, clearApiKey, isLoaded, hasApiKey, hasGlobalKey } = useApiKey();
  const { trackSearch, trackAssistantQuery } = useAnalytics();

  // Detect OS on mount
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
        navigator.userAgent.toUpperCase().indexOf('MAC') >= 0;
      setOS(isMac ? 'mac' : 'windows');
    }
  }, []);

  // Debounce search tracking to avoid tracking every keystroke
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);

    if (selectedMode === 'ide') {
      const results = query.trim() ? searchShortcuts(query, os) : [];
      setSearchResults(results);
      setCommandLineSearchResults([]);
    } else if (selectedMode === 'commandLine') {
      const results = query.trim() ? searchCommandLineShortcuts(query, os) : [];
      setCommandLineSearchResults(results);
      setSearchResults([]);
    }

    // Track search after user stops typing (500ms debounce)
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.trim()) {
      searchTimeoutRef.current = setTimeout(() => {
        const totalResults = selectedMode === 'ide' ? searchResults.length : commandLineSearchResults.length;
        trackSearch(query, totalResults);
      }, 500);
    }
  }, [trackSearch, os, selectedMode, searchResults.length, commandLineSearchResults.length]);

  const handleModeSelect = useCallback((mode: ShortcutMode) => {
    setSelectedMode(mode);
    setSearchQuery('');
    setSearchResults([]);
    setCommandLineSearchResults([]);
  }, []);

  const resetToModeSelection = useCallback(() => {
    setSelectedMode(null);
    setSearchQuery('');
    setSearchResults([]);
    setCommandLineSearchResults([]);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const toggleChat = useCallback(() => {
    setIsChatOpen((prev) => !prev);
  }, []);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  // Show mode selection if no mode is selected
  if (!selectedMode) {
    return <ModeSelection onModeSelect={handleModeSelect} />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={resetToModeSelection}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                title="Change mode"
              >
                ←
              </button>
              <div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {selectedMode === 'ide'
                    ? 'IDE Keyboard Shortcuts'
                    : 'Command Line Guide'
                  }
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {selectedMode === 'ide'
                    ? 'IntelliJ IDEA ⇄ Visual Studio'
                    : 'Bash / Zsh Commands & Shortcuts'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {(selectedMode === 'ide' || selectedMode === 'commandLine') && (
                <SearchBar
                  onSearch={handleSearch}
                  placeholder={selectedMode === 'ide' ? 'Search IDE shortcuts...' : 'Search commands...'}
                />
              )}
              <button
                onClick={openSettings}
                className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Settings"
              >
                <svg
                  className="w-5 h-5 text-zinc-600 dark:text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Toggles Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {/* OS Toggle - Only show for IDE mode */}
          {selectedMode === 'ide' && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                Platform:
              </span>
              <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                <button
                  onClick={() => setOS('windows')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors flex items-center gap-1.5 ${os === 'windows'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                    }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  Windows
                </button>
                <button
                  onClick={() => setOS('mac')}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors border-l border-zinc-200 dark:border-zinc-700 flex items-center gap-1.5 ${os === 'mac'
                    ? 'bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                    }`}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Mac
                </button>
              </div>
            </div>
          )}

          {/* IDE Highlight Toggle - Only show for IDE mode */}
          {selectedMode === 'ide' && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                Highlight:
              </span>
              <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                <button
                  onClick={() =>
                    setHighlightIDE((prev) =>
                      prev === 'intellij' ? null : 'intellij'
                    )
                  }
                  className={`px-3 py-1.5 text-sm font-medium transition-colors ${highlightIDE === 'intellij'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                    }`}
                >
                  IntelliJ
                </button>
                <button
                  onClick={() =>
                    setHighlightIDE((prev) =>
                      prev === 'visualStudio' ? null : 'visualStudio'
                    )
                  }
                  className={`px-3 py-1.5 text-sm font-medium transition-colors border-l border-zinc-200 dark:border-zinc-700 ${highlightIDE === 'visualStudio'
                    ? 'bg-purple-500 text-white'
                    : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700'
                    }`}
                >
                  VS
                </button>
              </div>
            </div>
          )}
        </div>


        {/* Search Results */}
        {searchQuery && selectedMode === 'ide' && (
          <SearchResults results={searchResults} query={searchQuery} os={os} />
        )}

        {searchQuery && selectedMode === 'commandLine' && (
          <CommandLineSearchResults results={commandLineSearchResults} query={searchQuery} os={os} />
        )}

        {/* Categories */}
        {!searchQuery && selectedMode === 'ide' && (
          <div className="space-y-8">
            {shortcutCategories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                os={os}
                highlightIDE={highlightIDE}
              />
            ))}
          </div>
        )}

        {!searchQuery && selectedMode === 'commandLine' && (
          <div className="space-y-8">
            {commandLineCategories.map((category) => (
              <CommandLineCategorySection
                key={category.id}
                category={category}
                os={os}
              />
            ))}
          </div>
        )}

        {/* Quick Reference Footer */}
        <footer className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>
              Click the chat button in the bottom right to ask questions about
              {selectedMode === 'ide' ? ' keyboard shortcuts' : ' commands'} using AI.
            </p>
          </div>
        </footer>
      </main>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={closeSettings}
        apiKey={apiKey}
        onSaveApiKey={setApiKey}
        onClearApiKey={clearApiKey}
      />

      {/* Chat Components */}
      {isLoaded && (
        <>
          {isChatOpen ? (
            <ChatWindow
              isOpen={isChatOpen}
              onClose={toggleChat}
              apiKey={apiKey}
              hasApiKey={hasApiKey}
              hasGlobalKey={hasGlobalKey}
              onOpenSettings={openSettings}
              onTrackQuery={trackAssistantQuery}
            />
          ) : (
            <ChatToggleButton onClick={toggleChat} />
          )}
        </>
      )}
    </div>
  );
}
