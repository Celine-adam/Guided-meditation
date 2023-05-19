import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { DateContext } from "../../Context/DateContext";
import MeditationCard from "./MeditationCard.jsx";

export default function Meditations() {
  const { url, playList, setPlayList } = useContext(DateContext);
  const [meditations, setMeditations] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");

  const fetchMeditations = async () => {
    try {
      const res = await axios.get(`${url}/api/meditations/list`, {
        params: { page },
      });

      setMeditations((prevMeditations) => [
        ...prevMeditations,
        ...res.data.meditations,
      ]);
      setSelectedTime("");
      console.log("it is working");
    } catch (error) {
      console.log("Resource not found");
    }
  };

  const fetchMeditationsByTime = async (time) => {
    try {
      const res = await axios.get(`${url}/api/meditations/${time}`);

      setMeditations(res.data);
      console.log("it is working");
    } catch (error) {
      console.log("Resource not found");
    }
  };

  useEffect(() => {
    if (selectedTime === "") {
      fetchMeditations();
    } else {
      fetchMeditationsByTime(selectedTime);
    }
  }, [page, selectedTime]);

  const handleTimeFilter = (time) => {
    setSelectedTime(time);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handelAddPlayList = (index) => {
    setPlayList([...playList, meditations[index]]);
  };

  return (
    <section className="meditation-section">
      <h2 className="heading-meditation">Guided Meditation</h2>
      <div className="filter-container">
        <button
          className="bn632-hover bn20"
          onClick={() => handleTimeFilter(" ")}
        >
          All
        </button>
        <button
          className="bn632-hover bn20"
          onClick={() => handleTimeFilter("5 minutes")}
        >
          5mins
        </button>
        <button
          className="bn632-hover bn20"
          onClick={() => handleTimeFilter("10 minutes")}
        >
          10mins
        </button>
        <button
          className="bn632-hover bn20"
          onClick={() => handleTimeFilter("20 minutes")}
        >
          20mins
        </button>
      </div>

      <div className="container">
        {meditations.map((meditation, index) => (
          <MeditationCard
            key={index}
            card={meditation}
            handelAddPlayList={handelAddPlayList}
            index={index}
          />
        ))}
      </div>
      <button onClick={handleLoadMore}>Load More..</button>
    </section>
  );
}
