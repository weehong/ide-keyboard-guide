import { CommandLineCategory, OS, CommandLineShortcut } from '@/types/shortcuts';

export const commandLineCategories: CommandLineCategory[] = [
    {
        id: 'navigation',
        name: 'Navigation & File Operations',
        icon: '📁',
        shortcuts: [
            {
                id: 'list-files',
                function: 'List files and directories',
                command: { windows: 'ls', mac: 'ls' },
                description: 'Show contents of current directory',
                keywords: ['list', 'files', 'directory', 'ls', 'dir'],
            },
            {
                id: 'list-detailed',
                function: 'List files with details',
                command: { windows: 'ls -la', mac: 'ls -la' },
                description: 'Show detailed file information including hidden files',
                keywords: ['list', 'detailed', 'hidden', 'permissions', 'ls -la'],
            },
            {
                id: 'change-directory',
                function: 'Change directory',
                command: { windows: 'cd <directory>', mac: 'cd <directory>' },
                description: 'Navigate to a specific directory',
                keywords: ['change', 'directory', 'navigate', 'cd'],
            },
            {
                id: 'current-directory',
                function: 'Show current directory',
                command: { windows: 'pwd', mac: 'pwd' },
                description: 'Display current working directory path',
                keywords: ['current', 'directory', 'path', 'pwd'],
            },
            {
                id: 'parent-directory',
                function: 'Go to parent directory',
                command: { windows: 'cd ..', mac: 'cd ..' },
                description: 'Move up one directory level',
                keywords: ['parent', 'up', 'back', 'cd ..'],
            },
            {
                id: 'home-directory',
                function: 'Go to home directory',
                command: { windows: 'cd ~', mac: 'cd ~' },
                description: 'Navigate to user home directory',
                keywords: ['home', 'user', 'cd ~'],
            },
        ],
    },
    {
        id: 'file-operations',
        name: 'File & Directory Management',
        icon: '📝',
        shortcuts: [
            {
                id: 'create-file',
                function: 'Create new file',
                command: { windows: 'touch <filename>', mac: 'touch <filename>' },
                description: 'Create an empty file',
                keywords: ['create', 'file', 'new', 'touch'],
            },
            {
                id: 'create-directory',
                function: 'Create directory',
                command: { windows: 'mkdir <dirname>', mac: 'mkdir <dirname>' },
                description: 'Create a new directory',
                keywords: ['create', 'directory', 'folder', 'mkdir'],
            },
            {
                id: 'copy-file',
                function: 'Copy file/directory',
                command: { windows: 'cp <source> <destination>', mac: 'cp <source> <destination>' },
                description: 'Copy files or directories',
                keywords: ['copy', 'duplicate', 'cp'],
            },
            {
                id: 'move-file',
                function: 'Move/rename file',
                command: { windows: 'mv <source> <destination>', mac: 'mv <source> <destination>' },
                description: 'Move or rename files and directories',
                keywords: ['move', 'rename', 'mv'],
            },
            {
                id: 'remove-file',
                function: 'Remove file',
                command: { windows: 'rm <filename>', mac: 'rm <filename>' },
                description: 'Delete a file',
                keywords: ['remove', 'delete', 'rm'],
            },
            {
                id: 'remove-directory',
                function: 'Remove directory',
                command: { windows: 'rm -rf <dirname>', mac: 'rm -rf <dirname>' },
                description: 'Delete directory and its contents',
                keywords: ['remove', 'delete', 'directory', 'recursive', 'rm -rf'],
            },
        ],
    },
    {
        id: 'text-processing',
        name: 'Text Processing & Search',
        icon: '🔍',
        shortcuts: [
            {
                id: 'view-file',
                function: 'View file contents',
                command: { windows: 'cat <filename>', mac: 'cat <filename>' },
                description: 'Display entire file contents',
                keywords: ['view', 'display', 'read', 'cat'],
            },
            {
                id: 'page-file',
                function: 'Page through file',
                command: { windows: 'less <filename>', mac: 'less <filename>' },
                description: 'View file contents page by page',
                keywords: ['page', 'scroll', 'less', 'more'],
            },
            {
                id: 'file-head',
                function: 'Show first lines',
                command: { windows: 'head <filename>', mac: 'head <filename>' },
                description: 'Display first 10 lines of file',
                keywords: ['head', 'first', 'beginning', 'start'],
            },
            {
                id: 'file-tail',
                function: 'Show last lines',
                command: { windows: 'tail <filename>', mac: 'tail <filename>' },
                description: 'Display last 10 lines of file',
                keywords: ['tail', 'last', 'end', 'recent'],
            },
            {
                id: 'search-text',
                function: 'Search text in files',
                command: { windows: 'grep "<pattern>" <filename>', mac: 'grep "<pattern>" <filename>' },
                description: 'Search for text patterns in files',
                keywords: ['search', 'find', 'pattern', 'grep'],
            },
            {
                id: 'find-files',
                function: 'Find files by name',
                command: { windows: 'find . -name "<pattern>"', mac: 'find . -name "<pattern>"' },
                description: 'Search for files by name pattern',
                keywords: ['find', 'search', 'locate', 'files'],
            },
        ],
    },
    {
        id: 'system-info',
        name: 'System Information',
        icon: '💻',
        shortcuts: [
            {
                id: 'disk-usage',
                function: 'Show disk usage',
                command: { windows: 'df -h', mac: 'df -h' },
                description: 'Display filesystem disk space usage',
                keywords: ['disk', 'space', 'usage', 'df'],
            },
            {
                id: 'directory-size',
                function: 'Directory size',
                command: { windows: 'du -sh <directory>', mac: 'du -sh <directory>' },
                description: 'Show size of directory',
                keywords: ['directory', 'size', 'du'],
            },
            {
                id: 'running-processes',
                function: 'Show running processes',
                command: { windows: 'ps aux', mac: 'ps aux' },
                description: 'List all running processes',
                keywords: ['processes', 'running', 'ps'],
            },
            {
                id: 'system-info',
                function: 'System information',
                command: { windows: 'uname -a', mac: 'uname -a' },
                description: 'Display system information',
                keywords: ['system', 'info', 'version', 'uname'],
            },
            {
                id: 'memory-usage',
                function: 'Memory usage',
                command: { windows: 'free -h', mac: 'free -h' },
                description: 'Display memory usage information',
                keywords: ['memory', 'ram', 'usage', 'free'],
            },
        ],
    },
    {
        id: 'shortcuts',
        name: 'Command Line Shortcuts',
        icon: '⚡',
        shortcuts: [
            {
                id: 'clear-screen',
                function: 'Clear terminal screen',
                command: { windows: 'Ctrl+L or clear', mac: '⌘K or clear' },
                description: 'Clear the terminal screen',
                keywords: ['clear', 'screen', 'clean'],
            },
            {
                id: 'command-history',
                function: 'Command history',
                command: { windows: 'history', mac: 'history' },
                description: 'Show command history',
                keywords: ['history', 'previous', 'commands'],
            },
            {
                id: 'previous-command',
                function: 'Previous command',
                command: { windows: '↑ or !!', mac: '↑ or !!' },
                description: 'Repeat previous command',
                keywords: ['previous', 'repeat', 'last', 'up arrow'],
            },
            {
                id: 'search-history',
                function: 'Search command history',
                command: { windows: 'Ctrl+R', mac: '⌃R' },
                description: 'Search through command history',
                keywords: ['search', 'history', 'reverse'],
            },
            {
                id: 'cancel-command',
                function: 'Cancel current command',
                command: { windows: 'Ctrl+C', mac: '⌃C' },
                description: 'Interrupt/cancel current command',
                keywords: ['cancel', 'interrupt', 'stop', 'ctrl+c'],
            },
            {
                id: 'end-of-line',
                function: 'Move to end of line',
                command: { windows: 'Ctrl+E or End', mac: '⌃E or ⌘→' },
                description: 'Move cursor to end of line',
                keywords: ['end', 'cursor', 'line'],
            },
            {
                id: 'beginning-of-line',
                function: 'Move to beginning of line',
                command: { windows: 'Ctrl+A or Home', mac: '⌃A or ⌘←' },
                description: 'Move cursor to beginning of line',
                keywords: ['beginning', 'start', 'cursor', 'line'],
            },
        ],
    },
];

export function searchCommandLineShortcuts(query: string, os: OS): { shortcut: CommandLineShortcut; category: CommandLineCategory }[] {
    const normalizedQuery = query.toLowerCase().trim();
    const results: { shortcut: CommandLineShortcut; category: CommandLineCategory; score: number }[] = [];

    commandLineCategories.forEach((category) => {
        category.shortcuts.forEach((shortcut) => {
            let score = 0;

            // Check function name
            if (shortcut.function.toLowerCase().includes(normalizedQuery)) {
                score += 10;
            }

            // Check description
            if (shortcut.description.toLowerCase().includes(normalizedQuery)) {
                score += 8;
            }

            // Check keywords
            shortcut.keywords.forEach((keyword) => {
                if (keyword.toLowerCase().includes(normalizedQuery)) {
                    score += 5;
                }
            });

            // Check command
            const command = shortcut.command[os].toLowerCase();
            if (command.includes(normalizedQuery)) {
                score += 15;
            }

            if (score > 0) {
                results.push({ shortcut, category, score });
            }
        });
    });

    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, 20)
        .map(({ shortcut, category }) => ({ shortcut, category }));
}