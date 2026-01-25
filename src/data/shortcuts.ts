import { ShortcutCategory, OS } from '@/types/shortcuts';

export const shortcutCategories: ShortcutCategory[] = [
  {
    id: 'navigation',
    name: 'Navigation',
    icon: '🔎',
    shortcuts: [
      {
        id: 'go-to-definition',
        function: 'Go to Definition',
        intellij: { windows: 'Ctrl+B / Ctrl+Click', mac: '⌘B / ⌘+Click' },
        visualStudio: { windows: 'F12 / Ctrl+Click', mac: 'F12 / ⌘+Click' },
        keywords: ['definition', 'navigate', 'jump', 'go to', 'declaration', 'source'],
      },
      {
        id: 'go-to-declaration',
        function: 'Go to Declaration',
        intellij: { windows: 'Ctrl+B', mac: '⌘B' },
        visualStudio: { windows: 'F12', mac: 'F12' },
        keywords: ['declaration', 'navigate', 'jump', 'go to'],
      },
      {
        id: 'go-to-implementation',
        function: 'Go to Implementation(s)',
        intellij: { windows: 'Ctrl+Alt+B', mac: '⌘⌥B' },
        visualStudio: { windows: 'Ctrl+F12', mac: '⌘F12' },
        keywords: ['implementation', 'implementations', 'navigate', 'interface', 'concrete'],
      },
      {
        id: 'go-to-file',
        function: 'Go to File',
        intellij: { windows: 'Ctrl+Shift+N', mac: '⌘⇧O' },
        visualStudio: { windows: 'Ctrl+Shift+T', mac: '⌘⇧T' },
        keywords: ['file', 'open', 'find file', 'navigate', 'search file'],
      },
      {
        id: 'go-to-symbol',
        function: 'Go to Symbol',
        intellij: { windows: 'Ctrl+Alt+Shift+N', mac: '⌘⌥O' },
        visualStudio: { windows: 'Ctrl+T', mac: '⌘T' },
        keywords: ['symbol', 'class', 'method', 'function', 'search', 'find'],
      },
      {
        id: 'navigate-back',
        function: 'Navigate Back',
        intellij: { windows: 'Ctrl+Alt+Left', mac: '⌘⌥←' },
        visualStudio: { windows: 'Ctrl+-', mac: '⌃-' },
        keywords: ['back', 'previous', 'history', 'navigate'],
      },
      {
        id: 'navigate-forward',
        function: 'Navigate Forward',
        intellij: { windows: 'Ctrl+Alt+Right', mac: '⌘⌥→' },
        visualStudio: { windows: 'Ctrl+Shift+-', mac: '⌃⇧-' },
        keywords: ['forward', 'next', 'history', 'navigate'],
      },
    ],
  },
  {
    id: 'editing',
    name: 'Editing & Code Assistance',
    icon: '✨',
    shortcuts: [
      {
        id: 'quick-fix',
        function: 'Quick Fix / Intention Actions',
        intellij: { windows: 'Alt+Enter', mac: '⌥↩' },
        visualStudio: { windows: 'Ctrl+.', mac: '⌘.' },
        keywords: ['quick fix', 'intention', 'action', 'suggestion', 'fix', 'lightbulb', 'hint'],
      },
      {
        id: 'code-completion',
        function: 'Code Completion',
        intellij: { windows: 'Ctrl+Space', mac: '⌃Space' },
        visualStudio: { windows: 'Ctrl+Space', mac: '⌃Space' },
        keywords: ['completion', 'autocomplete', 'intellisense', 'suggest'],
      },
      {
        id: 'smart-completion',
        function: 'Smart Completion',
        intellij: { windows: 'Ctrl+Shift+Space', mac: '⌃⇧Space' },
        visualStudio: { windows: 'Ctrl+Shift+Space', mac: '⌃⇧Space' },
        keywords: ['smart', 'completion', 'type-aware', 'context'],
      },
      {
        id: 'parameter-info',
        function: 'Parameter Info',
        intellij: { windows: 'Ctrl+P', mac: '⌘P' },
        visualStudio: { windows: 'Ctrl+Shift+Space', mac: '⌃⇧Space' },
        keywords: ['parameter', 'info', 'signature', 'arguments', 'help'],
      },
      {
        id: 'generate-code',
        function: 'Generate Code',
        intellij: { windows: 'Alt+Insert', mac: '⌘N' },
        visualStudio: { windows: 'Ctrl+. / Ctrl+K, Ctrl+X', mac: '⌘. / ⌘K, ⌘X' },
        keywords: ['generate', 'create', 'constructor', 'getter', 'setter', 'override'],
      },
      {
        id: 'surround-with',
        function: 'Surround With',
        intellij: { windows: 'Ctrl+Alt+T', mac: '⌘⌥T' },
        visualStudio: { windows: 'Ctrl+K, Ctrl+S', mac: '⌘K, ⌘S' },
        keywords: ['surround', 'wrap', 'if', 'try', 'catch', 'for', 'while'],
      },
      {
        id: 'duplicate-line',
        function: 'Duplicate Line',
        intellij: { windows: 'Ctrl+D', mac: '⌘D' },
        visualStudio: { windows: 'Ctrl+D', mac: '⌘D' },
        keywords: ['duplicate', 'copy', 'line', 'clone'],
      },
      {
        id: 'delete-line',
        function: 'Delete Line',
        intellij: { windows: 'Ctrl+Y', mac: '⌘⌫' },
        visualStudio: { windows: 'Ctrl+L', mac: '⌘L' },
        keywords: ['delete', 'remove', 'line', 'cut'],
      },
    ],
  },
  {
    id: 'refactoring',
    name: 'Refactoring',
    icon: '🔄',
    shortcuts: [
      {
        id: 'rename',
        function: 'Rename Symbol',
        intellij: { windows: 'Shift+F6', mac: '⇧F6' },
        visualStudio: { windows: 'Ctrl+R, Ctrl+R', mac: '⌘R, ⌘R' },
        keywords: ['rename', 'refactor', 'change name', 'symbol'],
      },
      {
        id: 'extract-method',
        function: 'Extract Method',
        intellij: { windows: 'Ctrl+Alt+M', mac: '⌘⌥M' },
        visualStudio: { windows: 'Ctrl+R, Ctrl+M', mac: '⌘R, ⌘M' },
        keywords: ['extract', 'method', 'function', 'refactor'],
      },
      {
        id: 'extract-variable',
        function: 'Extract Variable',
        intellij: { windows: 'Ctrl+Alt+V', mac: '⌘⌥V' },
        visualStudio: { windows: 'Ctrl+R, Ctrl+V', mac: '⌘R, ⌘V' },
        keywords: ['extract', 'variable', 'local', 'refactor'],
      },
      {
        id: 'extract-field',
        function: 'Extract Field',
        intellij: { windows: 'Ctrl+Alt+F', mac: '⌘⌥F' },
        visualStudio: { windows: 'Ctrl+R, Ctrl+F', mac: '⌘R, ⌘F' },
        keywords: ['extract', 'field', 'member', 'refactor'],
      },
      {
        id: 'inline',
        function: 'Inline',
        intellij: { windows: 'Ctrl+Alt+N', mac: '⌘⌥N' },
        visualStudio: { windows: 'Ctrl+R, Ctrl+I', mac: '⌘R, ⌘I' },
        keywords: ['inline', 'refactor', 'remove', 'flatten'],
      },
      {
        id: 'refactor-this',
        function: 'Refactor This',
        intellij: { windows: 'Ctrl+Alt+Shift+T', mac: '⌃T' },
        visualStudio: { windows: 'Ctrl+.', mac: '⌘.' },
        keywords: ['refactor', 'menu', 'options', 'this'],
      },
    ],
  },
  {
    id: 'formatting',
    name: 'Formatting & Structure',
    icon: '🧹',
    shortcuts: [
      {
        id: 'reformat-code',
        function: 'Reformat Code',
        intellij: { windows: 'Ctrl+Alt+L', mac: '⌘⌥L' },
        visualStudio: { windows: 'Ctrl+K, Ctrl+D', mac: '⌘K, ⌘D' },
        keywords: ['format', 'reformat', 'indent', 'beautify', 'pretty'],
      },
      {
        id: 'optimize-imports',
        function: 'Optimize Imports / Usings',
        intellij: { windows: 'Ctrl+Alt+O', mac: '⌃⌥O' },
        visualStudio: { windows: 'Ctrl+R, Ctrl+G', mac: '⌘R, ⌘G' },
        keywords: ['optimize', 'imports', 'usings', 'organize', 'remove unused'],
      },
      {
        id: 'move-line-up',
        function: 'Move Line Up',
        intellij: { windows: 'Ctrl+Shift+Up', mac: '⌘⇧↑' },
        visualStudio: { windows: 'Alt+Up', mac: '⌥↑' },
        keywords: ['move', 'line', 'up', 'reorder'],
      },
      {
        id: 'move-line-down',
        function: 'Move Line Down',
        intellij: { windows: 'Ctrl+Shift+Down', mac: '⌘⇧↓' },
        visualStudio: { windows: 'Alt+Down', mac: '⌥↓' },
        keywords: ['move', 'line', 'down', 'reorder'],
      },
      {
        id: 'expand-selection',
        function: 'Expand Selection',
        intellij: { windows: 'Ctrl+W', mac: '⌥↑' },
        visualStudio: { windows: 'Shift+Alt+Right', mac: '⇧⌥→' },
        keywords: ['expand', 'selection', 'select', 'grow'],
      },
      {
        id: 'shrink-selection',
        function: 'Shrink Selection',
        intellij: { windows: 'Ctrl+Shift+W', mac: '⌥↓' },
        visualStudio: { windows: 'Shift+Alt+Left', mac: '⇧⌥←' },
        keywords: ['shrink', 'selection', 'select', 'reduce'],
      },
    ],
  },
  {
    id: 'run-debug',
    name: 'Run & Debug',
    icon: '▶',
    shortcuts: [
      {
        id: 'run',
        function: 'Run',
        intellij: { windows: 'Shift+F10', mac: '⌃R' },
        visualStudio: { windows: 'Ctrl+F5', mac: '⌘F5' },
        keywords: ['run', 'execute', 'start', 'launch'],
      },
      {
        id: 'debug',
        function: 'Debug',
        intellij: { windows: 'Shift+F9', mac: '⌃D' },
        visualStudio: { windows: 'F5', mac: 'F5' },
        keywords: ['debug', 'debugger', 'start debugging'],
      },
      {
        id: 'toggle-breakpoint',
        function: 'Toggle Breakpoint',
        intellij: { windows: 'Ctrl+F8', mac: '⌘F8' },
        visualStudio: { windows: 'F9', mac: 'F9' },
        keywords: ['breakpoint', 'toggle', 'debug', 'stop'],
      },
      {
        id: 'step-over',
        function: 'Step Over',
        intellij: { windows: 'F8', mac: 'F8' },
        visualStudio: { windows: 'F10', mac: 'F10' },
        keywords: ['step', 'over', 'debug', 'next'],
      },
      {
        id: 'step-into',
        function: 'Step Into',
        intellij: { windows: 'F7', mac: 'F7' },
        visualStudio: { windows: 'F11', mac: 'F11' },
        keywords: ['step', 'into', 'debug', 'enter'],
      },
      {
        id: 'step-out',
        function: 'Step Out',
        intellij: { windows: 'Shift+F8', mac: '⇧F8' },
        visualStudio: { windows: 'Shift+F11', mac: '⇧F11' },
        keywords: ['step', 'out', 'debug', 'exit', 'return'],
      },
    ],
  },
  {
    id: 'git',
    name: 'Git / Version Control',
    icon: '🌱',
    shortcuts: [
      {
        id: 'commit',
        function: 'Commit',
        intellij: { windows: 'Ctrl+K', mac: '⌘K' },
        visualStudio: { windows: 'Ctrl+K', mac: '⌘K' },
        keywords: ['commit', 'git', 'save', 'version control'],
      },
      {
        id: 'push',
        function: 'Push',
        intellij: { windows: 'Ctrl+Shift+K', mac: '⌘⇧K' },
        visualStudio: { windows: 'Ctrl+K, Ctrl+P', mac: '⌘K, ⌘P' },
        keywords: ['push', 'git', 'upload', 'remote'],
      },
      {
        id: 'pull',
        function: 'Update / Pull',
        intellij: { windows: 'Ctrl+T', mac: '⌘T' },
        visualStudio: { windows: 'Ctrl+K, Ctrl+G', mac: '⌘K, ⌘G' },
        keywords: ['pull', 'update', 'git', 'fetch', 'sync'],
      },
      {
        id: 'show-history',
        function: 'Show History',
        intellij: { windows: 'Alt+9', mac: '⌘9' },
        visualStudio: { windows: 'Ctrl+K, Ctrl+H', mac: '⌘K, ⌘H' },
        keywords: ['history', 'log', 'git', 'version control', 'commits'],
      },
    ],
  },
];

export function searchShortcuts(
  query: string,
  os: OS = 'windows'
): { shortcut: any; category: ShortcutCategory }[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(/\s+/);
  const results: { shortcut: any; category: ShortcutCategory; score: number }[] = [];

  for (const category of shortcutCategories) {
    for (const shortcut of category.shortcuts) {
      let score = 0;

      // Check function name
      const funcLower = shortcut.function.toLowerCase();
      if (funcLower.includes(lowerQuery)) {
        score += 10;
      }

      // Check keywords
      for (const keyword of shortcut.keywords) {
        for (const word of queryWords) {
          if (keyword.includes(word)) {
            score += 5;
          }
        }
      }

      // Check if query matches keyboard shortcut
      const intellijKey = shortcut.intellij[os].toLowerCase();
      const vsKey = shortcut.visualStudio[os].toLowerCase();
      if (intellijKey.includes(lowerQuery) || vsKey.includes(lowerQuery)) {
        score += 8;
      }

      if (score > 0) {
        results.push({ shortcut, category, score });
      }
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  return results.map(({ shortcut, category }) => ({ shortcut, category }));
}
