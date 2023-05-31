import React from "react";
import axios from "../../Util/axiosInstance.js";

export default function MeditationCard({ card, handelAddPlayList, index }) {
  return (
    <div class="card">
      <div class="card_image">
        <img src={`api/files/byid/${card.image}`} alt="" />
      </div>
      <div class="card_content">
        <h2 class="card_title">{card.title}</h2>
        <p class="card_text">{card.description}</p>
        <audio
          class="btn card_btn"
          src={`api/files/byid/${card.audio}`}
          controls
          autoPlay
        />
      </div>
    </div>
  );
}
