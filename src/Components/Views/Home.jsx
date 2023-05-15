import React, { useState, useEffect } from "react";

import Messages from "../../Messages.json";

export default function Home() {
  const [randomMessage, setRandomMessage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Messages.length);
    setRandomMessage(Messages[randomIndex]);
  }, []);
  return (
    <>
      <section id="hero">
        <div className="hero-container ">
          <h1>Today's Message 🦋</h1>
          <div>
            {randomMessage ? (
              <div>
                <h2>{randomMessage.content}</h2>
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
