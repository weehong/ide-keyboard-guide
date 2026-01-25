'use client';

import { ShortcutMode } from '@/types/shortcuts';

interface ModeSelectionProps {
    onModeSelect: (mode: ShortcutMode) => void;
}

export default function ModeSelection({ onModeSelect }: ModeSelectionProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Choose Your Guide
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Select the type of shortcuts and commands you want to learn
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* IDE Keyboard Shortcuts */}
                    <div
                        onClick={() => onModeSelect('ide')}
                        className="group cursor-pointer bg-white dark:bg-zinc-800 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 p-8 hover:shadow-lg"
                    >
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                            ⌨️
                        </div>
                        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                            IDE Keyboard
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                            Master keyboard shortcuts for IntelliJ IDEA, Visual Studio, and other IDEs.
                            Navigate, edit, and refactor code efficiently.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                                IntelliJ IDEA
                            </span>
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                                Visual Studio
                            </span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                                Code Navigation
                            </span>
                        </div>
                    </div>

                    {/* Command Line Shortcuts */}
                    <div
                        onClick={() => onModeSelect('commandLine')}
                        className="group cursor-pointer bg-white dark:bg-zinc-800 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-200 p-8 hover:shadow-lg"
                    >
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                            💻
                        </div>
                        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                            Command Line
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                            Learn essential terminal commands and shortcuts for Bash and Zsh.
                            File operations, text processing, and system management.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                                Bash
                            </span>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                                Zsh
                            </span>
                            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm">
                                Terminal
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
                    You can change your selection anytime using the menu in the top navigation
                </div>
            </div>
        </div>
    );
}