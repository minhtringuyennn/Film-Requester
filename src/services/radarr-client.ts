import { VITE_RADARR_ENDPOINT } from '@/lib/constants/env';
import axios from 'axios';

export const radarrApiClient = axios.create({
  baseURL: VITE_RADARR_ENDPOINT
});
