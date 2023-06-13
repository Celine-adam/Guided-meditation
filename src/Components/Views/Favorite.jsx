import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { DateContext } from "../../Context/DateContext.js";

export default function Favorite() {
  const { favorite, setFavorite } = useContext(DateContext);
  const handleDelete = (index) => {
    const updatedFavorites = favorite.filter((fav, i) => i !== index);
    setFavorite(updatedFavorites);
  };

  return (
    <div id="favorite-section">
      <h1>Your Favorites</h1>
      <div className="favorite-container">
        {favorite.map((fav, index) => (
          <div className="div-fav" key={index}>
            <button onClick={() => handleDelete(index)}>
              <FaTimes className="remove-icon" />
            </button>
            <p className="fav-p">{fav.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
