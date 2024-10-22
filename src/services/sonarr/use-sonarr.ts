import { sonarrApiClient, sonarrQueryKeys } from '@/services';
import { useQuery } from '@tanstack/react-query';

const getUsersFn = async () => {
  const response = await sonarrApiClient.get('');
  return response.data;
};

export function useSonarrUsers() {
  return useQuery({
    queryKey: sonarrQueryKeys.all,
    queryFn: getUsersFn
  });
}
