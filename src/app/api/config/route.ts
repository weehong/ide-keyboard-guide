import { NextResponse } from 'next/server';

export async function GET() {
  const hasGlobalApiKey = !!process.env.DEEPSEEK_API_KEY;

  return NextResponse.json({
    hasGlobalApiKey,
  });
}
