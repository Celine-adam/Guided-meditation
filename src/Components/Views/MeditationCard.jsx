import React from "react";
import axios from "../../Util/axiosInstance.js";

export default function MeditationCard({ card, handelAddPlayList }) {
  return (
    <div class="card">
      <div class="card_content">
        <h2 class="card_title">{card.title}</h2>
        <p class="card_text">{card.description}</p>
      </div>

      <iframe src={card.link} title="description"></iframe>
    </div>
  );
}
