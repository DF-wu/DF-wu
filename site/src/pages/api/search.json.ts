import { profile } from '../../data/profile';
import { apiCatalog, designVariants, insightArticles } from '../../data/portfolio-content';
import { jsonResponse, nowIso } from '../../lib/api';

export const prerender = true;

export function GET() {
  const projects = profile.projects.map((item) => ({
    type: 'project',
    title: item.name,
    summary: item.description,
    url: item.url,
    tags: [item.stack, item.highlight].filter(Boolean),
  }));

  const papers = [...profile.publications, ...profile.domesticPublications].map((item) => ({
    type: 'publication',
    title: item.title,
    summary: 'abstract' in item ? item.abstract : item.titleEn,
    url: 'url' in item ? item.url : '#research',
    tags: ['venue' in item ? item.venue : '', String(item.year)].filter(Boolean),
  }));

  return jsonResponse({
    generatedAt: nowIso(),
    index: [
      ...projects,
      ...papers,
      ...profile.contributions.map((item) => ({
        type: 'contribution',
        title: `${item.repo} ${item.pr}`,
        summary: item.description,
        url: item.url,
        tags: [item.type],
      })),
      ...insightArticles.map((item) => ({
        type: 'insight',
        title: item.title,
        summary: item.summary,
        url: `#insight-${item.slug}`,
        tags: item.tags,
      })),
      ...apiCatalog.map((item) => ({
        type: 'api',
        title: item.label,
        summary: item.description,
        url: item.path,
        tags: ['api'],
      })),
      ...designVariants.map((item) => ({
        type: 'style',
        title: item.name,
        summary: item.thesis,
        url: item.branch,
        tags: [item.key, item.palette],
      })),
    ],
  });
}
