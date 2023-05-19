import React from "react";
import { DateContext } from "../../Context/DateContext.js";
// import axios from "axios";

export default function Home() {
  // const [randomAffirmation, setRandomAffirmation] = useState(null);
  // const [randomMessage, setRandomMessage] = useState(null);
  // const [showAffirmation, setShowAffirmation] = useState(true);
  // const { url } = useContext(DateContext);

  // // const url = "https://guided-meditation.onrender.com";
  // const handleToggle = () => {
  //   setShowAffirmation(!showAffirmation);
  // };
  // const handleGenerateRandom = () => {
  //   // Generate random affirmation and message here
  //   if (showAffirmation) {
  //     // Generate random affirmation
  //     async function fetchAffirmations() {
  //       try {
  //         const res = await axios.get(`${url}/api/affirmations/list`);
  //         const randomIndex = Math.floor(Math.random() * res.data.length);
  //         setRandomAffirmation(res.data[randomIndex]);
  //       } catch (error) {
  //         console.log("Resource not found");
  //       }
  //     }

  //     fetchAffirmations();
  //   } else {
  //     // Generate random message
  //     async function fetchAMessages() {
  //       try {
  //         const res = await axios.get(`${url}/api/message/list`);
  //         const randomIndex = Math.floor(Math.random() * res.data.length);
  //         setRandomMessage(res.data[randomIndex]);
  //       } catch (error) {
  //         console.log("Resource not found");
  //       }
  //     }

  //     fetchAMessages();
  //   }
  // };

  return (
    <>
      {/* <section id="hero">
        <div className="hero-container">
          <div class="switch-button">
            <input class="switch-button-checkbox" type="checkbox"></input>
            <label class="switch-button-label" for="">
              <span class="switch-button-label-span">Photo</span>
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
      </section> */}
    </>
  );
}
// useEffect(() => {
//   async function fetchAffirmations() {
//     try {
//       const res = await axios.get(`${url}/api/affirmations/list`);
//       const randomIndex = Math.floor(Math.random() * res.data.length);
//       setRandomAffirmation(res.data[randomIndex]);
//     } catch (error) {
//       console.log("Resource not found");
//     }
//   }

//   fetchAffirmations();
// }, []);
