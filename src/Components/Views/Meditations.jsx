import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { DateContext } from "../../Context/DateContext";
import MeditationCard from "./MeditationCard";

export default function Meditations() {
  const { url, playList, setPlayList } = useContext(DateContext);
  const [meditationCards, setMeditationCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [searchByNameInput, setSearchByNameInput] = useState("");
  const [filterByTimeInput, setFilterByTimeInput] = useState("");

  useEffect(() => {
    async function fetchMeditation() {
      try {
        const res = await axios.get(`${url}/api/meditations/list`);
        setMeditationCards(res.data);
        setCards(res.data);
      } catch (error) {
        console.log("Resource not found");
      }
    }

    fetchMeditation();
  }, [url]);

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
    <section className="meditation-section">
      <h2 className="heading-meditation">Guided Mediation</h2>
      <div className="filter-container">
        <button className="bn632-hover bn20">All</button>
        <button className="bn632-hover bn20">5mins</button>
        <button className="bn632-hover bn20">10mins</button>
        <button className="bn632-hover bn20">20mins</button>
      </div>

      <div className="container">
        {cards.map((card, index) => (
          <MeditationCard
            key={card.id}
            card={card}
            handelAddPlayList={handelAddPlayList}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
