import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    username: string;
    role: string;
  } | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      login: async (username: string, password: string) => {
        // 在實際應用中，這裡應該調用後端 API
        if (username === 'admin' && password === 'admin123') {
          set({
            isAuthenticated: true,
            token: 'dummy-token',
            user: {
              username: 'admin',
              role: 'admin'
            }
          });
        } else {
          throw new Error('Invalid credentials');
        }
      },
      logout: () => {
        set({
          isAuthenticated: false,
          token: null,
          user: null
        });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);