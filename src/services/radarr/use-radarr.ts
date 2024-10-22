import { radarrApiClient, radarrQueryKeys } from '@/services';
import { useQuery } from '@tanstack/react-query';

const getUsersFn = async () => {
  const response = await radarrApiClient.get('');
  return response.data;
};

export function useRadarrUsers() {
  return useQuery({
    queryKey: radarrQueryKeys.all,
    queryFn: getUsersFn
  });
}
