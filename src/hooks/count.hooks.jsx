import { useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const handleClickSuma = () => setCount(count + 1);
  const handleClickResta = () => setCount(count - 1);

  return {
    count,
    handleClickSuma,
    handleClickResta,
  };
};
