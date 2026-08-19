import { designVariants, capabilityMatrix } from '../../data/portfolio-content';
import { STYLE_KEYS } from '../../data/profile';
import { jsonResponse, nowIso } from '../../lib/api';

export const prerender = true;

export function GET() {
  return jsonResponse({
    generatedAt: nowIso(),
    styles: STYLE_KEYS,
    gallery: '/styles/',
    variants: designVariants.map((variant) => ({ ...variant, previewPath: `/styles/${variant.key}/` })),
    capabilities: capabilityMatrix,
  });
}
