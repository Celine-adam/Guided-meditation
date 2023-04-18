import React, { useContext, useState } from "react";

import { DateContext } from "../../Context/DateContext";
import MeditationCard from "./MeditationCard";

export default function Courses() {
  const { meditationCards, playList, setPlayList } = useContext(DateContext);
  const [cards, setCards] = useState(meditationCards);
  const [searchByNameInput, setSearchByNameInput] = useState("");
  const [filterByTimeInput, setFilterByTimeInput] = useState("");

  const handleChangeNameInput = (e) => {
    setSearchByNameInput(e.target.value);
  };
  const handleSearchByName = (e) => {
    e.preventDefault();

    if (searchByNameInput === "") {
      setCards([...meditationCards]);
    } else {
      const cardByName = meditationCards.filter(
        (card) => card.title === searchByNameInput
      );
      setCards(cardByName);
    }
  };
  const handleChangeTimeInput = (e) => {
    setFilterByTimeInput(e.target.value);
  };
  const handleFilterByTime = (e) => {
    e.preventDefault();

    if (filterByTimeInput === "") {
      setCards([...meditationCards]);
    } else {
      const cardByTime = meditationCards.filter(
        (card) => card.time === filterByTimeInput
      );
      setCards(cardByTime);
    }
  };

  const handelAddPlayList = (index) => {
    setPlayList([...playList, meditationCards[index]]);
  };
  return (
    <>
      <h1>Guided Mediation</h1>
      <div>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            onChange={handleChangeNameInput}
          />
          <button onClick={handleSearchByName}>Search By Name</button>
          &nbsp;
          <input
            className="filter-input"
            type="text"
            onChange={handleChangeTimeInput}
          />
          <button onClick={handleFilterByTime}>Filter By Time</button>
        </form>
      </div>
      <section id="why-us" className="why-us section-bg">
        <div className="container">
          <div className="row">
            {cards.map((card, index) => (
              <MeditationCard
                key={card.id}
                card={card}
                handelAddPlayList={handelAddPlayList}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
