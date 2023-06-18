import React from "react";
import { ImCross, ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaJournalWhills } from "react-icons/fa";
import axios from "../../Util/axiosInstance.js";

export default function Header({ handleLogout }) {
  const handleSignOut = async () => {
    try {
      const response = await axios.get("/api/user/logout");
      console.log(response.data);
      handleLogout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="journal-header">
        <i>
          <FaJournalWhills />
        </i>
        <Link className="link" to="/journal">
          <h2>Journal</h2>
        </Link>
      </div>
      <input type="checkbox" id="check"></input>
      <label for="check">
        <i id="btn">
          <ImMenu />
        </i>
        <i id="cancel">
          {" "}
          <ImCross />
        </i>
      </label>
      <div className="sidebar">
        <header>Hi!</header>

        <Link to="/" className="link">
          <span>Home</span>
        </Link>
        <Link to="/podcast" className="link">
          <span>Podcast</span>
        </Link>
        <Link to="/favorite" className="link">
          <span>Favorite</span>
        </Link>
        <Link to="/journal" className="link">
          <span>Journal</span>
        </Link>

        <button className="btn-signout" onClick={handleSignOut}>
          Sign out <FaSignOutAlt className="icon" />
        </button>
      </div>
    </>
  );
}
