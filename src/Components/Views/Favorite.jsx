import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { DateContext } from "../../Context/DateContext.js";

export default function Favorite() {
  const { favorite } = useContext(DateContext);

  console.log("this fav list", favorite);
  return (
    <div id="favorite-section">
      <div className="favorite-container">
        <h1>your Favorite</h1>
        {favorite.map((fav, index) => (
          <p className="fav-p" key={index}>
            {" "}
            <FaRegHeart className="favorite-icon" />
            {fav.content}
          </p>
        ))}
      </div>
    </div>
  );
}
