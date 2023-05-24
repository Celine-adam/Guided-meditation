import React from "react";

import { ImCross, ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <input type="checkbox" id="check"></input>
      <label for="check">
        <i id="btn">
          <ImMenu />
        </i>
        <i class="fas fa-times fa-2x" id="cancel">
          <ImCross />
        </i>
      </label>
      <div class="sidebar">
        <header>Menu</header>
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
        <button className="btn-signout">
          Sign out <FaSignOutAlt />
        </button>
      </div>
    </>
  );
}
