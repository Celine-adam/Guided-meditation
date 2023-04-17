import React, { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? <AiOutlineClose /> : <AiOutlineAlignRight />}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link className="link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to={"/guided"}>
                Guided Mediation
              </Link>
            </li>
            <li>
              <Link className="link" to={"/playList"}>
                PlayList
              </Link>
            </li>
            <li>
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
