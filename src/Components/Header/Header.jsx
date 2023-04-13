import React, { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    // <header id="header">
    //   <div>
    //     <nav>
    //       <Link className="p-4 text-dark" to={"/"}>
    //         Home
    //       </Link>
    //       <Link className="p-4 text-dark" to={"/guided"}>
    //         Guided Mediation
    //       </Link>
    //       <Link className="p-4 text-dark" to={"/playList"}>
    //         PlayList
    //       </Link>
    //       <Link className="p-4 text-dark" to={"/login"}>
    //         Login
    //       </Link>
    //     </nav>
    //   </div>
    // </header>
    <header className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <AiOutlineAlignRight />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link className="p-4 text-dark" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="p-4 text-dark" to={"/guided"}>
                Guided Mediation
              </Link>
            </li>
            <li>
              <Link className="p-4 text-dark" to={"/playList"}>
                PlayList
              </Link>
            </li>
            <li>
              <Link className="p-4 text-dark" to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
  // <header id="header">
  //   <div>
  //     <nav>
  //       <Link className="p-4 text-dark" to={"/"}>
  //         Home
  //       </Link>
  //       <Link className="p-4 text-dark" to={"/guided"}>
  //         Guided Mediation
  //       </Link>
  //       <Link className="p-4 text-dark" to={"/playList"}>
  //         PlayList
  //       </Link>
  //       <Link className="p-4 text-dark" to={"/login"}>
  //         Login
  //       </Link>
  //     </nav>
  //   </div>
  // </header>
}
