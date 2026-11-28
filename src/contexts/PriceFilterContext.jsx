import { createContext, useContext, useState } from 'react';

const PriceFilterContext = createContext(null);

export function PriceFilterProvider({ children }) {
  const [maxPrice, setMaxPrice] = useState(null);

  return (
    <PriceFilterContext.Provider value={{ maxPrice, setMaxPrice }}>
      {children}
    </PriceFilterContext.Provider>
  );
}

export function usePriceFilter() {
  return useContext(PriceFilterContext);
}