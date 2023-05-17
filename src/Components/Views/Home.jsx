import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [randomAffirmation, setRandomAffirmation] = useState(null);

  const url = "https://guided-meditation.onrender.com";

  useEffect(() => {
    async function fetchAffirmations() {
      try {
        const res = await axios.get(`${url}/api/affirmations/list`);
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setRandomAffirmation(res.data[randomIndex]);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle 404 error
          console.log("Resource not found");
        } else {
          // Handle other errors
          console.error("Request failed:", error.message);
        }
      }
    }

    fetchAffirmations();
  }, []);

  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <h1>Today's Message 🦋</h1>
          <div>
            {randomAffirmation ? (
              <div>
                <h2>{randomAffirmation.content}</h2>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
