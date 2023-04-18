import React, { useContext } from "react";

import { DateContext } from "../../Context/DateContext";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { MdPlaylistRemove } from "react-icons/md";

export default function PlayList() {
  const { playList, setPlayList } = useContext(DateContext);
  const handleRemove = (index) => {
    setPlayList(playList.filter((_, i) => i !== index));
  };

  return (
    <div className="playList-class">
      <h1>May play List</h1>
      <section id="why-us" className="why-us section-bg">
        <div className="container">
          <div className="row">
            {playList.map((card, index) => (
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                key={index}
              >
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1678280440804-352d3479b51e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.body}</p>
                  </div>
                  <div className="row">
                    <div className="card-icon col-lg-4 col-md-6">
                      <i className="bx bx-calendar-edit">
                        <a href={card.link}>
                          <AiTwotoneCustomerService />
                        </a>
                      </i>
                    </div>

                    <div className="card-icon col-lg-4 col-md-6">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemove(index)}
                      >
                        <MdPlaylistRemove />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
