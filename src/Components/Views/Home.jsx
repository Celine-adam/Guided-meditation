import React, { useState, useContext, useEffect } from "react";
import { DateContext } from "../../Context/DateContext.js";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

export default function Home() {
  const [randomAffirmation, setRandomAffirmation] = useState(null);
  const [randomMessage, setRandomMessage] = useState(null);
  const [showAffirmation, setShowAffirmation] = useState(true);

  const { url, favorite, setFavorite } = useContext(DateContext);

  // const url = "https://guided-meditation.onrender.com";
  const handleToggle = () => {
    setShowAffirmation(!showAffirmation);
  };
  useEffect(() => {
    if (showAffirmation) {
      fetchAffirmations();
    } else {
      fetchAMessages();
    }
  }, [showAffirmation]);

  const fetchAMessages = async () => {
    try {
      const res = await axios.get(`${url}/api/message/list`);
      const randomIndex = Math.floor(Math.random() * res.data.length);
      setRandomMessage(res.data[randomIndex]);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const fetchAffirmations = async () => {
    try {
      const res = await axios.get(`${url}/api/affirmations/list`);
      const randomIndex = Math.floor(Math.random() * res.data.length);
      setRandomAffirmation(res.data[randomIndex]);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const handleFavorite = () => {
    const favoriteContent = showAffirmation ? randomAffirmation : randomMessage;
    setFavorite([...favorite, favoriteContent]);
    console.log("this fav list from home", favorite);
  };

  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div class="switch-button">
            <input
              class="switch-button-checkbox"
              type="checkbox"
              onChange={handleToggle}
            ></input>
            <label class="switch-button-label">
              <span class="switch-button-label-span">Affirmation</span>
            </label>
          </div>
          {showAffirmation ? (
            randomAffirmation ? (
              <p>{randomAffirmation.content}</p>
            ) : (
              <p>Loading Affirmation...</p>
            )
          ) : randomMessage ? (
            <p>{randomMessage.content}</p>
          ) : (
            <p>Loading Message...</p>
          )}
        </div>
        <button className="btn-favorite" onClick={handleFavorite}>
          <FaRegHeart className="favorite-icon" />
        </button>
      </section>
    </>
  );
}
