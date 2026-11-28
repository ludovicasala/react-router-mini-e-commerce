import { createContext, useContext, useState } from 'react';

const PriceFilterContext = createContext(null);

export function PriceFilterProvider({ children }) {
  const [lowPrice, setLowPrice] = useState(false);

  return (
    <PriceFilterContext.Provider value={{ lowPrice, setLowPrice }}>
      {children}
    </PriceFilterContext.Provider>
  );
}

export function usePriceFilter() {
  return useContext(PriceFilterContext);
}