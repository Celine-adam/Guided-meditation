import React from "react";
import axios from "../../Util/axiosInstance.js";

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
      <audio src={`api/files/byid/${card.audio}`} controls autoPlay />
      {/* <div className="card">
        <div className="card__view">
          <div className="card__view__data">
            <audio src={`api/files/byid/${card.audio}`} controls autoPlay />
          </div>
        </div>
        <div className="card__content">
          <p className="channel__video__name">{card.description}</p>
          <div className="channel__data">
            <div className="channel__img"></div>
            <div className="channel__data__text">
              <p className="channel__name">{card.user}</p>
              <div className="channel__subdata">
                <p className="channel__views">519.7K Views</p>
                <p className="channel__date">3 months ago</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
