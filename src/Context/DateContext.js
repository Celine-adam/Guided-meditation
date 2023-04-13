import { createContext, useState } from "react";
import MOCK_DATA from "../MOCK_DATA.json";

export const DateContext = createContext();

export default function DateContextProvider({ children }) {
  const [meditationCards, setMeditationCards] = useState(MOCK_DATA);
  const [playList, setPlayList] = useState([]);

  return (
    <DateContext.Provider
      value={{
        meditationCards,
        setMeditationCards,
        playList,
        setPlayList,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
