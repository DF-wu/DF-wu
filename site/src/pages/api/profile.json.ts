import { profile } from '../../data/profile';
import { jsonResponse, nowIso } from '../../lib/api';

export const prerender = true;

export function GET() {
  return jsonResponse({
    generatedAt: nowIso(),
    identity: {
      name: profile.name,
      fullName: profile.fullName,
      nameZh: profile.nameZh,
      title: profile.title,
      location: profile.location,
      tagline: profile.tagline,
      motto: profile.motto,
    },
    about: profile.about,
    philosophy: profile.philosophy,
    education: profile.education,
    lab: profile.lab,
    links: profile.links,
    experience: profile.experience,
    roles: profile.roles,
    evidenceSources: profile.evidenceSources,
  });
}
