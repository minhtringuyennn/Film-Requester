import { jellyfinApiClient } from '@/services';
import { useJellyfinStore } from '@/stores/jellyfin-store';
import { useMutation } from '@tanstack/react-query';

const loginFn = async ({ username, password }: { username: string; password: string }) => {
  const response = await jellyfinApiClient.post('/Users/AuthenticateByName', {
    Username: username,
    Pw: password
  });
  return response.data;
};

export function useJellyfinLogin() {
  const setCredentials = useJellyfinStore((state) => state.setCredentials);

  return useMutation({
    mutationFn: loginFn,
    onSuccess: (data) => {
      setCredentials(data.AccessToken, data.User.Id);
    }
  });
}
