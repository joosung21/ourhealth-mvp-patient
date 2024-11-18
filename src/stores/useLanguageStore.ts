import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../i18n';

interface LanguageState {
  language: string;
  changeLanguage: (lng: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      changeLanguage: (lng) => {
        i18n.changeLanguage(lng);
        set({ language: lng });
      },
    }),
    {
      name: 'language-store',
    }
  )
);
