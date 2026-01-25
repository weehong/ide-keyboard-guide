'use client';

import { Shortcut, ShortcutCategory, OS } from '@/types/shortcuts';
import { KeyboardKey } from './KeyboardKey';

interface SearchResultsProps {
  results: { shortcut: Shortcut; category: ShortcutCategory }[];
  query: string;
  os: OS;
}

export function SearchResults({ results, query, os }: SearchResultsProps) {
  if (!query) return null;

  if (results.length === 0) {
    return (
      <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          No shortcuts found for "{query}"
        </p>
        <p className="text-sm text-zinc-500 mt-2">
          Try different keywords or browse the categories below
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
        Search Results ({results.length})
      </h2>
      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="py-3 px-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 w-1/4">
                Function
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-zinc-500 dark:text-zinc-400 w-1/6">
                Category
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-orange-600 dark:text-orange-400 w-[28%]">
                IntelliJ IDEA
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-purple-600 dark:text-purple-400 w-[28%]">
                Visual Studio
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ shortcut, category }) => (
              <tr
                key={shortcut.id}
                className="border-b border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <td className="py-3 px-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {shortcut.function}
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                </td>
                <td className="py-3 px-4">
                  <KeyboardKey keyText={shortcut.intellij[os]} />
                </td>
                <td className="py-3 px-4">
                  <KeyboardKey keyText={shortcut.visualStudio[os]} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
