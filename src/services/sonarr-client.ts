import { VITE_SONARR_ENDPOINT } from '@/lib/constants/env';
import axios from 'axios';

export const sonarrApiClient = axios.create({
  baseURL: VITE_SONARR_ENDPOINT
});
