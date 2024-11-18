import './index.css';
import './global.scss';

import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import i18n from '@/i18n';
import { useLanguageStore } from '@/stores/useLanguageStore';
import { theme } from '@/theme';
import AppRoutes from './routes';

export default function App() {
  const { language } = useLanguageStore();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <ModalsProvider>
        <Notifications />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <AppRoutes />
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
}
