import { insightArticles } from '../../data/portfolio-content';
import { jsonResponse, nowIso } from '../../lib/api';

export const prerender = true;

export function GET() {
  return jsonResponse({
    generatedAt: nowIso(),
    insights: insightArticles,
  });
}
