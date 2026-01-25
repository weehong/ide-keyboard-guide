'use client';

import { Shortcut, OS } from '@/types/shortcuts';
import { KeyboardKey } from './KeyboardKey';

interface ShortcutRowProps {
  shortcut: Shortcut;
  os: OS;
  highlightIDE?: 'intellij' | 'visualStudio' | null;
}

export function ShortcutRow({ shortcut, os, highlightIDE }: ShortcutRowProps) {
  return (
    <tr className="border-b border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
      <td className="py-3 px-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {shortcut.function}
      </td>
      <td
        className={`py-3 px-4 ${
          highlightIDE === 'intellij'
            ? 'bg-orange-50 dark:bg-orange-900/20'
            : ''
        }`}
      >
        <KeyboardKey keyText={shortcut.intellij[os]} />
      </td>
      <td
        className={`py-3 px-4 ${
          highlightIDE === 'visualStudio'
            ? 'bg-purple-50 dark:bg-purple-900/20'
            : ''
        }`}
      >
        <KeyboardKey keyText={shortcut.visualStudio[os]} />
      </td>
    </tr>
  );
}
