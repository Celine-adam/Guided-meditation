import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { DateContext } from "../../Context/DateContext.js";

export default function Favorite() {
  const { favorite, setFavorite } = useContext(DateContext);

  const handleDelete = (index) => {
    const updatedFavorites = favorite.filter((fav, i) => i !== index);
    setFavorite(updatedFavorites);
  };

  return (
    <div id="favorite-section">
      <div className="favorite-container">
        <h1>Your Favorites</h1>
        {favorite.map((fav, index) => (
          <p className="fav-p" key={index}>
            <button onClick={() => handleDelete(index)}>
              <FaRegHeart className="favorite-icon" />
            </button>
            {fav.content}
          </p>
        ))}
      </div>
    </div>
  );
}
