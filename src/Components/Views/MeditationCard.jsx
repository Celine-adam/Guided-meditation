import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import React from "react";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

export default function MeditationCard({ card, handelAddPlayList, index }) {
  return (
    <div className="col-lg-4 col-md-2 d-flex align-items-stretch">
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
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <AiTwotoneCustomerService />
              </a>
            </i>
          </div>

          <div className="card-icon col-lg-4 col-md-6">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handelAddPlayList(index)}
            >
              <MdPlaylistAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
