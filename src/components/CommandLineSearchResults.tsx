'use client';

import { CommandLineShortcut, CommandLineCategory, OS } from '@/types/shortcuts';
import { CommandLineShortcutRow } from './CommandLineShortcutRow';

interface CommandLineSearchResultsProps {
    results: { shortcut: CommandLineShortcut; category: CommandLineCategory }[];
    query: string;
    os: OS;
}

export default function CommandLineSearchResults({ results, query, os }: CommandLineSearchResultsProps) {
    if (results.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
                    No command line shortcuts found
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Try searching for terms like "file", "directory", "search", or "navigation"
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span>Found {results.length} command{results.length !== 1 ? 's' : ''} for</span>
                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded font-mono">
                    {query}
                </span>
            </div>

            <div className="space-y-6">
                {results.reduce((acc, { shortcut, category }) => {
                    const existingCategory = acc.find(item => item.categoryId === category.id);
                    if (existingCategory) {
                        existingCategory.shortcuts.push(shortcut);
                    } else {
                        acc.push({
                            categoryId: category.id,
                            categoryName: category.name,
                            categoryIcon: category.icon,
                            shortcuts: [shortcut],
                        });
                    }
                    return acc;
                }, [] as Array<{
                    categoryId: string;
                    categoryName: string;
                    categoryIcon: string;
                    shortcuts: CommandLineShortcut[];
                }>).map(({ categoryId, categoryName, categoryIcon, shortcuts }) => (
                    <section key={categoryId} className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xl">{categoryIcon}</span>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                {categoryName}
                            </h3>
                            <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded text-xs">
                                {shortcuts.length}
                            </span>
                        </div>
                        <div className="space-y-3">
                            {shortcuts.map((shortcut) => (
                                <CommandLineShortcutRow
                                    key={shortcut.id}
                                    shortcut={shortcut}
                                    os={os}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}