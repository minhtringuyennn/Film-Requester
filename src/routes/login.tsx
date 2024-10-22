import Page from '@/app/login/page';
import { useJellyfinStore } from '@/stores/jellyfin-store';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: Page,
  beforeLoad: () => {
    const { accessToken } = useJellyfinStore.getState();
    if (accessToken) {
      throw redirect({ to: '/' });
    }
  }
});
