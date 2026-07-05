import { profile } from '../../data/profile';
import { insightArticles } from '../../data/portfolio-content';
import { jsonResponse, nowIso } from '../../lib/api';

export const prerender = true;

export function GET() {
  return jsonResponse({
    version: 'https://jsonfeed.org/version/1.1',
    title: `${profile.fullName} Engineering Portfolio Feed`,
    home_page_url: profile.links.website,
    feed_url: `${profile.links.website}/api/feed.json`,
    description: profile.tagline,
    generatedAt: nowIso(),
    items: insightArticles.map((item, index) => ({
      id: item.slug,
      url: `${profile.links.website}#insight-${item.slug}`,
      title: item.title,
      summary: item.summary,
      content_text: `${item.summary} Tags: ${item.tags.join(', ')}`,
      date_published: `2026-06-${String(10 + index).padStart(2, '0')}T00:00:00.000Z`,
      tags: [item.category, ...item.tags],
    })),
  });
}
