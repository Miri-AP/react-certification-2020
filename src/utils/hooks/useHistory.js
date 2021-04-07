import { useState } from 'react';

export const useHistory = () => {
  const [history, setHistory] = useState('');
  function setHistoryVal(keyword) {
    setHistory(keyword);
  }

  return { history, setHistoryVal };
};

// export { useHistory };
