'use client';

import { CommandLineCategory, OS } from '@/types/shortcuts';
import { CommandLineShortcutRow } from './CommandLineShortcutRow';

interface CommandLineCategorySectionProps {
    category: CommandLineCategory;
    os: OS;
}

export default function CommandLineCategorySection({ category, os }: CommandLineCategorySectionProps) {
    return (
        <section className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {category.name}
                </h2>
            </div>
            <div className="space-y-3">
                {category.shortcuts.map((shortcut) => (
                    <CommandLineShortcutRow
                        key={shortcut.id}
                        shortcut={shortcut}
                        os={os}
                    />
                ))}
            </div>
        </section>
    );
}