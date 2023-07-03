const mapping: Record<string, string> = {
  organizations: 'organization',
  users: 'user',
  works: 'work',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
