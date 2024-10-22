import Page from '@/app/app/page';
import { useJellyfinStore } from '@/stores/jellyfin-store';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
  beforeLoad: () => {
    const { accessToken } = useJellyfinStore.getState();
    if (!accessToken) {
      throw redirect({
        to: '/login'
      });
    }
  }
});

function Index() {
  return <Page />;
}
