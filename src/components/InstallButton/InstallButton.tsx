import { useEffect, useState } from 'react';

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
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('사용자가 PWA 설치를 수락했습니다.');
    } else {
      console.log('사용자가 PWA 설치를 취소했습니다.');
    }
    setDeferredPrompt(null);
  };

  if (isInstalled) {
    return null; // 이미 설치된 경우 버튼을 숨깁니다.
  }

  return (
    <div>
      {deferredPrompt && (
        <button onClick={handleInstallClick} style={styles.button}>
          앱 설치
        </button>
      )}
    </div>
  );
}

const styles = {
  button: {
    position: 'fixed' as 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#6200ea',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,
  },
};
