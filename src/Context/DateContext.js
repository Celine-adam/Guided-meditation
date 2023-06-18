import React from "react";
import { createContext, useState } from "react";

export const DateContext = createContext();

export default function DateContextProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <DateContext.Provider
      value={{
        favorite,
        setFavorite,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
