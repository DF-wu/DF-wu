import { apiCatalog } from '../../data/portfolio-content';
import { jsonResponse } from '../../lib/api';

export const prerender = true;

export function GET() {
  return jsonResponse({
    openapi: '3.1.0',
    info: {
      title: 'DF Wu Portfolio Data API',
      version: '1.0.0',
      description: 'Static JSON endpoints for portfolio identity, projects, metrics, insights, styles, and search.',
    },
    paths: Object.fromEntries(
      apiCatalog
        .filter((item) => item.path !== '/api/openapi.json')
        .map((item) => [
          item.path,
          {
            get: {
              summary: item.label,
              description: item.description,
              responses: {
                '200': {
                  description: 'JSON response',
                  content: {
                    'application/json': {
                      schema: { type: 'object' },
                    },
                  },
                },
              },
            },
          },
        ]),
    ),
  });
}
