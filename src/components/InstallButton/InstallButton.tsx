import { useEffect, useState } from 'react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@mantine/core';

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler as EventListener);

    window.addEventListener('appinstalled', () => {
      setDeferredPrompt(null);
      setIsInstalled(true);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener);
      window.removeEventListener('appinstalled', () => {});
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    setDeferredPrompt(null);
  };

  if (isInstalled) {
    return null; // Hide the button if the app is already installed
  }

  return (
    <div>
      {deferredPrompt && (
        <div className="mx-auto">
          <Button
            className="mt-auto"
            variant="light"
            size="lg"
            fullWidth
            onClick={handleInstallClick}
            leftSection={<ArrowDownOnSquareIcon className="w-6 h-6" />}
          >
            Install OurHealth App
          </Button>
        </div>
      )}
    </div>
  );
}
