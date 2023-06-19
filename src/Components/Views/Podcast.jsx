import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../Util/axiosInstance";
import MeditationCard from "./MeditationCard.jsx";

export default function Podcast() {
  const [meditations, setMeditations] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");

  const fetchMeditations = async () => {
    try {
      const res = await axios.get("/api/meditations/list", {
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
      const res = await axios.get(`/api/meditations/${time}`);

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

  return (
    <section className="meditation-section">
      <h2 className="heading-meditation">Guided Meditation</h2>
      <div className="filter-container">
        <button className="bn632-hover bn20" onClick={fetchMeditations}>
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
        <button className="bn632-hover bn20">
          <Link className="a" to="/Uploadform">
            New
          </Link>
        </button>
      </div>

      <div className="cards-container">
        <div className="cards-wrapper">
          {meditations.map((meditation, index) => (
            <MeditationCard key={index} card={meditation} />
          ))}
        </div>
      </div>
      <button className="btn-loadmore" onClick={handleLoadMore}>
        Load More..
      </button>
    </section>
  );
}
