import { profile } from '../../data/profile';
import { jsonResponse, nowIso } from '../../lib/api';

export const prerender = true;

export function GET() {
  return jsonResponse({
    generatedAt: nowIso(),
    projects: profile.projects,
    contributions: profile.contributions,
    skills: profile.skills,
  });
}
