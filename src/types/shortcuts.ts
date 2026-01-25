export type OS = 'windows' | 'mac';
export type ShortcutMode = 'ide' | 'commandLine' | 'git';

export interface ShortcutKeys {
  windows: string;
  mac: string;
}

export interface Shortcut {
  id: string;
  function: string;
  intellij: ShortcutKeys;
  visualStudio: ShortcutKeys;
  keywords: string[];
}

export interface CommandLineShortcut {
  id: string;
  function: string;
  command: ShortcutKeys;
  description: string;
  keywords: string[];
}

export interface ShortcutCategory {
  id: string;
  name: string;
  icon: string;
  shortcuts: Shortcut[];
}

export interface CommandLineCategory {
  id: string;
  name: string;
  icon: string;
  shortcuts: CommandLineShortcut[];
}

export type IDE = 'intellij' | 'visualStudio';

export interface SearchResult {
  shortcut: Shortcut;
  category: ShortcutCategory;
  matchScore: number;
}
