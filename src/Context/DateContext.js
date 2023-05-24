import { createContext, useState } from "react";

export const DateContext = createContext();

export default function DateContextProvider({ children }) {
  const [playList, setPlayList] = useState([]);
  const [url, setUrl] = useState("https://guided-meditation.onrender.com");
  const [favorite, setFavorite] = useState([]);

  return (
    <DateContext.Provider
      value={{
        playList,
        setPlayList,
        url,
        setUrl,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
