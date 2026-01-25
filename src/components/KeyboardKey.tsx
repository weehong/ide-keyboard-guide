'use client';

interface KeyboardKeyProps {
  keyText: string;
}

export function KeyboardKey({ keyText }: KeyboardKeyProps) {
  // Parse the key combination (e.g., "Ctrl+Shift+N" -> ["Ctrl", "Shift", "N"])
  const parts = keyText.split(/([+/,])/);

  return (
    <span className="inline-flex items-center gap-0.5 flex-wrap">
      {parts.map((part, index) => {
        const trimmedPart = part.trim();

        if (trimmedPart === '+') {
          return (
            <span key={index} className="text-zinc-400 dark:text-zinc-500 mx-0.5">
              +
            </span>
          );
        }

        if (trimmedPart === '/') {
          return (
            <span key={index} className="text-zinc-400 dark:text-zinc-500 mx-1">
              /
            </span>
          );
        }

        if (trimmedPart === ',') {
          return (
            <span key={index} className="text-zinc-400 dark:text-zinc-500 mx-1">
              then
            </span>
          );
        }

        if (!trimmedPart) return null;

        return (
          <kbd
            key={index}
            className="inline-flex items-center justify-center min-w-[1.75rem] px-1.5 py-0.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded shadow-sm text-zinc-700 dark:text-zinc-300"
          >
            {trimmedPart}
          </kbd>
        );
      })}
    </span>
  );
}
