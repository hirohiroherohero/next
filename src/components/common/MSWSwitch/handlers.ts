import { States } from './types';

const useHandlers = (states: States) => {
  const { setButtonText, handleMSW, router } = states;

  const handleMSWButton = async () => {
    const isMSWOn = localStorage.getItem('MSW');
    const { worker } = await import('@/mocks/browser');
    const {
      mocks: { start, stop },
    } = handleMSW(worker);
    router.reload();
    if (isMSWOn === 'true') {
      stop();
      setButtonText('off');
    } else {
      start();
      setButtonText('on');
    }
  };

  const initMSW = async () => {
    const isMSWOn = localStorage.getItem('MSW');

    if (typeof window === undefined) {
      const { server } = await import('@/mocks/server');
      server.listen();
    } else {
      const { worker } = await import('@/mocks/browser');
      const {
        mocks: { start },
      } = handleMSW(worker);
      if (isMSWOn === 'true') {
        start();
        setButtonText('on');
      } else {
        stop();
        setButtonText('off');
      }
    }
  };

  return { handleMSWButton, initMSW };
};

export default useHandlers;
