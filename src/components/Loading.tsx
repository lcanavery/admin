// import { CircularProgress } from "@mui/material";
import React from "react";
// import { variants } from "../constants/variants";
// import { VARIANT } from "../config";
// const tersuave = require("../assets/images/icons/haycolor.png");
// const colorin = require("../assets/images/icons/colorinLong.png");
// const industria = require("../assets/images/icons/industriaLoading.png");

const Loading = ({ ...props }) => {
  return (
    <div
      style={{
        textAlign: "center",
        height: " 80vh",
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
      }}
      className=""
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 123.7 123.7"
        width="123.69999694824219"
        height="123.69999694824219"
      >
        <g>
          <path
            className="st0 svg-elem-1"
            d="M100.8,74.8L61,114.5c-5,5-13.1,5-18.1,0L12.6,84.1c-5-5-5-13.1,0-18.1l31.5-31.5c3.6-3.6,3.6-9.4,0-12.9
            l-3.7-3.7c-2.9-2.9-3-7.7-0.1-10.7c3-3.1,8-3,11.1,0l16,16c0.5,0.5,0.8,1,1.2,1.5c0.7,0.5,1.3,1,1.9,1.6l30.4,30.4
            C105.8,61.7,105.8,69.8,100.8,74.8z M92.2,65.3L61.3,34.4L21.2,74.5l30.9,30.9L92.2,65.3z"
          ></path>
          <path
            className="st0 svg-elem-2"
            d="M112.6,100.7L112.6,100.7L112.6,100.7C112.5,100.7,112.5,100.7,112.6,100.7L103.2,84c-0.8-1.5-2.9-1.5-3.8,0
            l-9.3,16.7h0c-1,1.8-1.5,3.9-1.5,6.1c0,7.1,5.7,12.8,12.8,12.8c7.1,0,12.8-5.7,12.8-12.8C114.1,104.6,113.5,102.5,112.6,100.7z"
          ></path>
        </g>
        <path
          className="st1 svg-elem-3"
          d="M45.6,103.9h14.8L42.7,102h19.8L39.7,100h26.6l-29.3-2.3h33.7l-36.5-1.9L75,95.1l-46.2-1.4l43.9-1.2l-47.1-0.9
          h54l-52.1-3l52.9-0.9l-53.6-0.9l53.6-1.2l-56.6-1.8l60.9-1.6H22.4c0,0,68.2-1.9,66.1-1.9c-2.1,0-69.7-0.9-69.7-0.9l69.7-1.9
          l-70.8-0.8l70.8-2.4l-71.8-0.6l74.5-2.7l-70.5-0.3l70-2l-69-1l74-2l-71-1l69-1l-65-2h63l-58-3h55l-52-3h49l-46-3h42l-39-3h37l-34-3
          h32l-28-2.8l23-0.2l-22-3L68.3,40l-13.9-1.8L67.1,37L56.7,36l6.7-2.1"
        ></path>
      </svg>

      {/* {VARIANT === variants.TERSUAVE ? (
        <div style={{ margin: "3rem", textAlign: "center" }}>
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <br />
          <img src={tersuave} style={{ height: "36px" }} />
        </div>
      ) : VARIANT === variants.COLORIN ? (
        <div style={{ margin: "3rem", textAlign: "center" }}>
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <br />
          <img src={colorin} style={{ height: "36px" }} />
        </div>
      ) : VARIANT === variants.INDUSTRIA ? (
        <div style={{ margin: "3rem", textAlign: "center" }}>
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <br />
          <img src={industria} style={{ height: "36px" }} />
        </div>
      ) : (
        <div style={{ margin: "3rem", textAlign: "center" }}>
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <br />
        </div>
      )} */}
    </div>
  );
};

export default Loading;
