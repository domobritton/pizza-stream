import { useState } from 'react';
import { items } from '../data/data';

const useCounter = timer => {
  const [data, setData] = useState(items);

  const updateCounter = timer => {
    const updatedData = [...data];
    if (timer === 30) {
      updatedData[0].completed = true;
      updatedData[1].active = true;
      updatedData[0].mobile = false;
      updatedData[1].mobile = true;
      return () => setData(updatedData);
    }
    if (timer === 10) {
      updatedData[1].completed = true;
      updatedData[2].active = true;
      updatedData[1].mobile = false;
      updatedData[2].mobile = true;
      return () => setData(updatedData);
    }
    return null;
  };

  updateCounter(timer);

  return data;
};

export default useCounter;
