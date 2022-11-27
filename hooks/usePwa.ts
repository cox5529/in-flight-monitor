import { useEffect } from 'react';

declare global {
  interface Window {
    workbox: any;
  }
}

export function usePwa() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;
      const promptNewVersionAvailable = () => {
        if (
          confirm(
            'A newer version of this web app is available, reload to update?'
          )
        ) {
          wb.addEventListener('controlling', () => {
            window.location.reload();
          });

          wb.messageSkipWaiting();
        }
      };

      wb.addEventListener('waiting', promptNewVersionAvailable);
      wb.register();
    }
  }, []);
}
