import { NextRequest, NextResponse } from 'next/server';
import { shortcutCategories } from '@/data/shortcuts';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

// Build the system prompt with all shortcut data
function buildSystemPrompt(): string {
  let shortcutData = '';

  for (const category of shortcutCategories) {
    shortcutData += `\n## ${category.icon} ${category.name}\n`;
    for (const shortcut of category.shortcuts) {
      shortcutData += `- **${shortcut.function}**: IntelliJ: \`${shortcut.intellij}\` | VS: \`${shortcut.visualStudio}\`\n`;
    }
  }

  return `You are an IDE keyboard shortcut assistant. Your job is to help users find keyboard shortcuts for IntelliJ IDEA and Visual Studio (Windows).

You have access to the following shortcut data:
${shortcutData}

Guidelines:
1. When a user asks about a task, find the relevant shortcut(s) and provide both the IntelliJ IDEA and Visual Studio shortcuts.
2. Format shortcuts clearly - use backticks for key combinations like \`Ctrl+Shift+N\`.
3. If a shortcut uses a sequence (like Ctrl+K, Ctrl+D), explain that they press the first combo, then the second.
4. Be concise but helpful. If the user's question is ambiguous, provide the most likely match.
5. If you can't find an exact match, suggest related shortcuts that might help.
6. Always mention both IDEs unless the user specifically asks about only one.
7. Keep responses short and focused on the shortcuts.`;
}

export async function POST(request: NextRequest) {
  try {
    const { message, apiKey: userApiKey } = await request.json();

    // Use environment variable first, fall back to user-provided key
    const apiKey = process.env.DEEPSEEK_API_KEY || userApiKey;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key is required. Please set your DeepSeek API key in settings.' },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: buildSystemPrompt(),
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.3,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key. Please check your DeepSeek API key in settings.' },
          { status: 401 }
        );
      }

      return NextResponse.json(
        { error: errorData.error?.message || 'Failed to get response from DeepSeek' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: 'No response from DeepSeek' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
