import { setupWorker } from 'msw';

type HandleMSW = (worker: ReturnType<typeof setupWorker>) => { mocks: { start(): void; stop(): void } };

export const handleMSW: HandleMSW = (worker) => {
  const mocks = {
    start: () => {
      worker.start();
      localStorage.setItem('MSW', 'true');
    },
    stop: () => {
      worker.stop();
      localStorage.setItem('MSW', 'false');
    },
  };

  return { mocks };
};
