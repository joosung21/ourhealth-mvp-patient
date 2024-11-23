// src/pwa-register.d.ts
declare module 'virtual:pwa-register' {
  export function registerSW(options?: {
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    immediate?: boolean;
  }): (update: boolean) => void;
}
