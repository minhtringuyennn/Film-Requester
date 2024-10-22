export const jellyfinQueryKeys = {
  all: ['jellyfin'] as const,
  users: () => [...jellyfinQueryKeys.all, 'users'] as const,
  user: (id: string) => [...jellyfinQueryKeys.users(), id] as const
};
