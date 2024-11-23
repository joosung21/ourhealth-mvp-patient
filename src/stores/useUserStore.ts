import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  firstName: string;
  lastName: string;
  fullName: string;
  setFullName: (fullName: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set, get) => ({
      firstName: 'Svannah',
      lastName: 'Nguyen',
      fullName: 'Svannah Nguyen',
      setFullName: (fullName) => set({ fullName }),
      setFirstName: (firstName) => set({ firstName, fullName: `${firstName} ${get().lastName}` }),
      setLastName: (lastName) => set({ lastName, fullName: `${get().firstName} ${lastName}` }),
    }),
    {
      name: 'user-store', // 로컬 스토리지에 저장될 이름
    }
  )
);
