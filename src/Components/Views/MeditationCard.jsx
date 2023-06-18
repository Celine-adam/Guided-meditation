import React from "react";
import axios from "../../Util/axiosInstance.js";

export default function MeditationCard({ card, handelAddPlayList }) {
  return (
    <div className="card">
      <iframe src={card.link} title="description"></iframe>
      <div className="text">
        <h3 className="card_title">{card.title}</h3>
        <p className="card_text">{card.description}</p>
      </div>
    </div>
  );
}
