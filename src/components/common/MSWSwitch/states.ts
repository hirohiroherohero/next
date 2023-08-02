import { useState } from 'react';
import { useRouter } from 'next/router';

import { handleMSW } from '@/mocks/handleMSW';

const useStates = () => {
  const [buttonText, setButtonText] = useState<string | null>(null);
  const router = useRouter();

  const getter = { buttonText, handleMSW, router };
  const setter = { setButtonText };

  return { ...getter, ...setter };
};

export default useStates;
