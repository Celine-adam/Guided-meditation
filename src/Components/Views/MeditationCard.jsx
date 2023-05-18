import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import React from "react";
import { AiTwotoneCustomerService } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

export default function MeditationCard({ card, handelAddPlayList, index }) {
  return (
    <div class="card">
      <div class="card__view">
        <div class="card__view__data">
          <p class="card__view__preview">Preview</p>
          <p class="card__play__icon">
            <svg width="8px" height="8px" viewBox="-0.5 0 7 7" version="1.1">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
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
          <p class="card__lenght">10:19</p>
        </div>
      </div>
      <div class="card__content">
        <p class="channel__video__name">
          The Backwards Brain Bicycle - Smarter Every Day 133" by Destin Sandlin
        </p>
        <div class="channel__data">
          <div class="channel__img"></div>
          <div class="channel__data__text">
            <p class="channel__name">SmarterEveryDay</p>
            <div class="channel__subdata">
              <p class="channel__views">519.7K Views</p>
              <p class="channel__date">3 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
