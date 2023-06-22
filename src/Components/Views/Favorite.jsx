import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function Favorite() {
  const { favorite, setFavorite } = useState([]);
  useEffect(() => {
    fetchFavorite();
  }, []);

  const fetchFavorite = async () => {
    try {
      const res = await axios.get(`/api/favorite/list`);
      setFavorite(res.data);
    } catch (error) {
      console.log("Resource not found");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/favorite/delete/${id}`);
      setFavorite((prevFavorite) =>
        prevFavorite.filter((fav) => fav.id !== id)
      );
    } catch (error) {
      console.log("Error deleting favorite", error);
    }
  };

  return (
    <div id="favorite-section">
      <h1>Your Favorites</h1>
      <div className="favorite-container">
        {favorite.map((fav, index) => (
          <div className="div-fav" key={index}>
            <button onClick={() => handleDelete(fav.id)}>
              <FaTimes className="remove-icon" />
            </button>
            <p className="fav-p">{fav.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
