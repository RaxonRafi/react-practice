import { createContext, useContext, useState } from "react";

const ToletContext = createContext();
export const useTolet = () => useContext(ToletContext);

export const ToletProvider = ({ children }) => {
    const [listings, setListings] = useState([]);
  
    const addListing = (data) => {
      const id = listings.length + 1;
      setListings([...listings, { ...data, id }]);
    };
  
    const deleteListing = (id) => {
      setListings(listings.filter((item) => item.id !== id));
    };
  
    const updateListing = (updatedItem) => {
      setListings(
        listings.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
    };
  
    return (
      <ToletContext.Provider
        value={{ listings, addListing, deleteListing, updateListing }}
      >
        {children}
      </ToletContext.Provider>
    );
  };
  
