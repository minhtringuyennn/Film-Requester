import { Button } from '@/components/ui/button';
import { useJellyfinStore } from '@/stores/jellyfin-store';
import { useNavigate } from '@tanstack/react-router';

export function LogoutButton() {
  const logout = useJellyfinStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: '/login' });
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
