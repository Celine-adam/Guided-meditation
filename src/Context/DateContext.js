import { createContext, useState } from "react";

export const DateContext = createContext();

export default function DateContextProvider({ children }) {
  const [playList, setPlayList] = useState([]);
  const [favorite, setFavorite] = useState([]);

  return (
    <DateContext.Provider
      value={{
        playList,
        setPlayList,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
