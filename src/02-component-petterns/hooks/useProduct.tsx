import { useState } from 'react';

export const useProduct = () => {

    const [ counter, setCounter ] = useState(0);

    const increaseBy = (value: number) => {
        setCounter( prev => Math.max( prev + value, 0 ) );//devuelve el valor anterior + el valor que le pasamos (o el valor mayor), por lo tanto no devuelve menos de 0
    }

  return {
    counter,
    increaseBy
  }
}

