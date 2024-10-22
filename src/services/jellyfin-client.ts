import { VITE_JELLYFIN_ENDPOINT } from '@/lib/constants/env';
import { useJellyfinStore } from '@/stores/jellyfin-store';
import axios from 'axios';

import { getAuthorizationHeader } from './jellyfin';

export const jellyfinApiClient = axios.create({
  baseURL: VITE_JELLYFIN_ENDPOINT
});

jellyfinApiClient.interceptors.request.use((config) => {
  const accessToken = useJellyfinStore.getState().accessToken;
  config.headers['Authorization'] = getAuthorizationHeader(accessToken ?? '');
  return config;
});
