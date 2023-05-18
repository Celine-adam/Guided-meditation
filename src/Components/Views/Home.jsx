import React, { useState, useEffect, useContext } from "react";
import { DateContext } from "../../Context/DateContext.js";
import axios from "axios";

export default function Home() {
  const [randomAffirmation, setRandomAffirmation] = useState(null);
  const { url } = useContext(DateContext);

  // const url = "https://guided-meditation.onrender.com";

  useEffect(() => {
    async function fetchAffirmations() {
      try {
        const res = await axios.get(`${url}/api/affirmations/list`);
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setRandomAffirmation(res.data[randomIndex]);
      } catch (error) {
        console.log("Resource not found");
      }
    }

    fetchAffirmations();
  }, []);

  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <h2>Today's Message 🦋</h2>

          {randomAffirmation ? (
            <p>{randomAffirmation.content}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </>
  );
}
