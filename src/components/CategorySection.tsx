'use client';

import { ShortcutCategory, OS } from '@/types/shortcuts';
import { ShortcutRow } from './ShortcutRow';

interface CategorySectionProps {
  category: ShortcutCategory;
  os: OS;
  highlightIDE?: 'intellij' | 'visualStudio' | null;
}

export function CategorySection({ category, os, highlightIDE }: CategorySectionProps) {
  return (
    <section className="mb-8">
      <h2 className="flex items-center gap-2 text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </h2>
      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
        <table className="w-full">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="py-3 px-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 w-1/3">
                Function
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-orange-600 dark:text-orange-400 w-1/3">
                IntelliJ IDEA
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-purple-600 dark:text-purple-400 w-1/3">
                Visual Studio
              </th>
            </tr>
          </thead>
          <tbody>
            {category.shortcuts.map((shortcut) => (
              <ShortcutRow
                key={shortcut.id}
                shortcut={shortcut}
                os={os}
                highlightIDE={highlightIDE}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
