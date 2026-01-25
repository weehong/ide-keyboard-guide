'use client';

import { CommandLineShortcut, OS } from '@/types/shortcuts';
import { useState } from 'react';

interface CommandLineShortcutRowProps {
    shortcut: CommandLineShortcut;
    os: OS;
}

export function CommandLineShortcutRow({ shortcut, os }: CommandLineShortcutRowProps) {
    const command = shortcut.command[os];
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for browsers that don't support clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = command;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-700/50 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
            <div className="flex-1 min-w-0">
                <h3 className="font-medium text-zinc-900 dark:text-white mb-1">
                    {shortcut.function}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {shortcut.description}
                </p>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0 flex items-center gap-2">
                <code className="px-3 py-2 bg-zinc-800 dark:bg-zinc-900 text-green-400 dark:text-green-300 rounded font-mono text-sm whitespace-nowrap">
                    {command}
                </code>
                <button
                    onClick={handleCopy}
                    className="px-2 py-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded transition-colors"
                    title="Copy command"
                >
                    {copied ? (
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}