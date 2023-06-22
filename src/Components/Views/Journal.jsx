import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "../../Util/axiosInstance.js";

export default function Journal() {
  const [journal, setJournal] = useState([]);
  useEffect(() => {
    fetchJournal();
  }, []);

  const fetchJournal = async () => {
    try {
      const res = await axios.get(`/api/journal/list`);
      setJournal(res.data);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/journal/delete/${id}`);
      setJournal((prevFavorite) =>
        prevFavorite.filter((journal) => journal.id !== id)
      );
    } catch (error) {
      console.log("Error deleting journal", error);
    }
  };

  return (
    <div id="journal-section">
      <h1>Dear Diary</h1>
      <form className="journal-form">
        <textarea type="text" placeholder="How was yor day ?" />
        <button>Entry</button>
      </form>
      <div className="journal-container">
        <div className="journal-wrapper">
          {journal.map((journal, index) => (
            <div className="div-journal" key={index}>
              <div className="div-date">
                <p className="journal-date">{journal.dateCreated}</p>
                <button onClick={() => handleDelete(journal.id)}>
                  <FaTimes className="remove-icon" />
                </button>
              </div>
              <p className="journal-content">{journal.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
