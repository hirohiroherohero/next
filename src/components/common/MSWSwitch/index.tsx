import { useEffect } from 'react';

import useMSWSwitchStates from './states';
import useMSWSwitchHandlers from './handlers';
import { MSWSwitchButton } from './style.css';

const MSWSwitch = () => {
  const states = useMSWSwitchStates();
  const { handleMSWButton, initMSW } = useMSWSwitchHandlers(states);
  const { buttonText } = states;

  useEffect(() => {
    initMSW();
  }, []);

  return (
    <>
      <button className={`${MSWSwitchButton} ${buttonText}`} onClick={handleMSWButton}>
        msw
      </button>
    </>
  );
};

export default MSWSwitch;
