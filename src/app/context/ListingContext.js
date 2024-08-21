

'use client';
import { createContext, useContext, useState } from 'react';

const ListingContext = createContext();

export function ListingProvider({ children }) {
  const [listingid, setListingid] = useState(null);

  return (
    <ListingContext.Provider value={{ listingid, setListingid }}>
      {children}
    </ListingContext.Provider>
  );
}

export function useListing() {
  return useContext(ListingContext);
}
