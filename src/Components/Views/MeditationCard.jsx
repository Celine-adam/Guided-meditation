import React from "react";

// import { useContext } from "react";
// import axios from "axios";
// import DateContext from "../../Context/DateContext.js";

export default function MeditationCard({ card, handelAddPlayList, index }) {
  // const { url } = useContext(DateContext);
  // const [Audio,setAudio]= useState();

  // const fetchAudio= async () => {
  //   try {
  //     const res = await axios.get(`${url}/`);

  //     setMeditations();

  //     console.log("it is working");
  //   } catch (error) {
  //     console.log("Resource not found");
  //   }
  // };
  return (
    <div>
      <div className="card">
        <div className="card__view">
          <div className="card__view__data">
            <p className="card__play__icon">
              <svg width="8px" height="8px" viewBox="-0.5 0 7 7" version="1.1">
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-347.000000, -3766.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        fill="#EAECEE"
                        d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                        id="play-[#1003]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </p>
            <p className="card__lenght">{card.time}</p>
          </div>
        </div>
        <div className="card__content">
          <p className="channel__video__name">{card.description}</p>
          <div className="channel__data">
            <div className="channel__img"></div>
            <div className="channel__data__text">
              <p className="channel__name">{card.title}</p>
              <div className="channel__subdata">
                <p className="channel__views">519.7K Views</p>
                <p className="channel__date">3 months ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
