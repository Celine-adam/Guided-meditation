import React, { useState, useContext, useEffect } from "react";
import { DateContext } from "../../Context/DateContext.js";
import { FaRegHeart } from "react-icons/fa";
import axios from "../../Util/axiosInstance";
import heroImage from "../../img/vecteezy_vector-illustration-of-a-girl-in-a-yoga-pose-without-a-face_11426491.jpg";

export default function Home() {
  const [randomAffirmation, setRandomAffirmation] = useState(null);
  const [randomMessage, setRandomMessage] = useState(null);
  const [showAffirmation, setShowAffirmation] = useState(true);
  const { favorite, setFavorite } = useContext(DateContext);

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
      const res = await axios.get(`/api/message/list`);
      const randomIndex = Math.floor(Math.random() * res.data.length);
      setRandomMessage(res.data[randomIndex]);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const fetchAffirmations = async () => {
    try {
      const res = await axios.get(`/api/affirmations/list`);
      const randomIndex = Math.floor(Math.random() * res.data.length);
      setRandomAffirmation(res.data[randomIndex]);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const handleFavorite = async () => {
    try {
      const favoriteData = {
        content: showAffirmation
          ? randomAffirmation.content
          : randomMessage.content,
      };

      // Send a POST request to create a favorite
      const res = await axios.post("/api/favorite/create", favoriteData);
      console.log(res.data.message); // Optional: Display success message
    } catch (error) {
      console.log("Error creating favorite:", error.response.data.message);
    }
  };

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="switch-button">
          <input
            className="switch-button-checkbox"
            type="checkbox"
            onChange={handleToggle}
          ></input>
          <label className="switch-button-label">
            <span className="switch-button-label-span">affirmation</span>
          </label>
        </div>
        <div className="bottom">
          <div className="hero-imag">
            <img src={heroImage} alt="" />
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
          <button className="btn-favorite" onClick={handleFavorite}>
            <FaRegHeart className="favorite-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
