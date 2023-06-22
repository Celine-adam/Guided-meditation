import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "../../Util/axiosInstance.js";

export default function Journal() {
  const [journal, setJournal] = useState([]);
  useEffect(() => {
    fetchJournal();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      content: formData.get("content"),
    };
    try {
      const res = await axios.post("/api/journal/create", data);
      console.log(res.data);
    } catch (error) {
      console.error("there was an error", error);
    }
    fetchJournal();
  };

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
      setJournal((prevJournal) => prevJournal.filter((x) => x._id !== id));
    } catch (error) {
      console.log("Error deleting journal", error);
    }
  };

  return (
    <div id="journal-section">
      <h1>Dear Diary</h1>
      <form className="journal-form" onSubmit={handleSubmit}>
        <textarea type="text" placeholder="How was yor day ?" name="content" />
        <button>Entry</button>
      </form>
      <div className="journal-container">
        <div className="journal-wrapper">
          {journal.map((x, index) => (
            <div className="div-journal" key={index}>
              <div className="div-date">
                <p className="journal-date">{x.dateCreated}</p>
                <button onClick={() => handleDelete(x._id)}>
                  <FaTimes className="remove-icon" />
                </button>
              </div>
              <p className="journal-content">{x.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
