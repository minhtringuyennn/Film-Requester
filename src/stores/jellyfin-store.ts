import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JellyfinState {
  accessToken: string | null;
  userId: string | null;
  setCredentials: (accessToken: string, userId: string) => void;
  clearCredentials: () => void;
  logout: () => void;
}

export const useJellyfinStore = create<JellyfinState>()(
  persist(
    (set) => ({
      accessToken: null,
      userId: null,
      setCredentials: (accessToken, userId) => set({ accessToken, userId }),
      clearCredentials: () => set({ accessToken: null, userId: null }),
      logout: () => {
        set({ accessToken: null, userId: null });
      }
    }),
    {
      name: 'film-req.jellyfin'
    }
  )
);
