import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const ANALYTICS_FILE = path.join(DATA_DIR, 'analytics.json');

interface AnalyticsEntry {
  id: string;
  timestamp: string;
  feature: 'search' | 'assistant';
  query: string;
  sessionId: string;
  resultsCount?: number;
}

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function readAnalytics(): Promise<AnalyticsEntry[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(ANALYTICS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeAnalytics(entries: AnalyticsEntry[]) {
  await ensureDataDir();
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { feature, query, sessionId, resultsCount } = body;

    if (!feature || !query || !sessionId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (feature !== 'search' && feature !== 'assistant') {
      return NextResponse.json(
        { error: 'Invalid feature type' },
        { status: 400 }
      );
    }

    const entry: AnalyticsEntry = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      timestamp: new Date().toISOString(),
      feature,
      query,
      sessionId,
      ...(feature === 'search' && { resultsCount }),
    };

    const entries = await readAnalytics();
    entries.push(entry);
    await writeAnalytics(entries);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to record analytics' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = await readAnalytics();

    const searchEntries = entries.filter((e) => e.feature === 'search');
    const assistantEntries = entries.filter((e) => e.feature === 'assistant');

    const summary = {
      totalEvents: entries.length,
      searchUsage: {
        count: searchEntries.length,
        queries: searchEntries.map((e) => ({
          query: e.query,
          resultsCount: e.resultsCount,
          timestamp: e.timestamp,
        })),
      },
      assistantUsage: {
        count: assistantEntries.length,
        queries: assistantEntries.map((e) => ({
          query: e.query,
          timestamp: e.timestamp,
        })),
      },
      featureComparison: {
        searchPercentage:
          entries.length > 0
            ? ((searchEntries.length / entries.length) * 100).toFixed(1)
            : '0',
        assistantPercentage:
          entries.length > 0
            ? ((assistantEntries.length / entries.length) * 100).toFixed(1)
            : '0',
      },
    };

    return NextResponse.json(summary);
  } catch (error) {
    console.error('Analytics read error:', error);
    return NextResponse.json(
      { error: 'Failed to read analytics' },
      { status: 500 }
    );
  }
}
