import React from "react";
import { ImCross, ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "../../Util/axiosInstance.js";

export default function Header() {
  const handleSignOut = async () => {
    try {
      const response = await axios.get("/logout");
      // Handle successful sign-out, e.g., show a success message
      console.log(response.data); // User is logged out
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(error);
    }
  };
  return (
    <>
      <input type="checkbox" id="check"></input>
      <label for="check">
        <i id="btn">
          <ImMenu />
        </i>
        <i className="fas fa-times fa-2x" id="cancel">
          <ImCross />
        </i>
      </label>
      <div className="sidebar">
        <div>
          <header>Hi! </header>
        </div>
        <Link className="a" to={"/"}>
          <span>Home</span>
        </Link>

        <Link className="a" to={"/guided"}>
          <span> Meditations </span>
        </Link>

        <Link className="a" to={"/playList"}>
          <span>PlayList </span>
        </Link>
        <Link className="a" to={"/favorite"}>
          <span>Favorite </span>
        </Link>
        <Link className="a" to={"/login"}>
          <span>Login </span>
        </Link>
        <button className="btn-signout" onClick={handleSignOut}>
          Sign out <FaSignOutAlt />
        </button>
      </div>
    </>
  );
}
