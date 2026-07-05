import { profile } from '../../data/profile';
import { impactSignals, timeline } from '../../data/portfolio-content';
import { jsonResponse, nowIso } from '../../lib/api';

export const prerender = true;

export function GET() {
  return jsonResponse({
    generatedAt: nowIso(),
    snapshotDate: profile.stats.snapshotDate,
    stats: profile.stats,
    impactSignals,
    timeline,
  });
}
