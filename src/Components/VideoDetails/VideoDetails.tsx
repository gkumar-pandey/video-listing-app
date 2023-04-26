import React from "react";
import "./VideoDetails.css";

const VideoDetails = (props: any) => {
  const { title, url, duration, description } = props;
  const ytVideoId = url?.split("=");

  return (
    <div>
      <div className="video-details-wrapper">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              ytVideoId[ytVideoId.length - 1]
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="video-details-text">
          <h2>{title}</h2>
          <p>
            <b>Discription: </b>
            {description}
          </p>
          <p>Duration: {duration}</p>
        </div>
        <div className="video-details-btn">
          <button>Liked</button>
          <button>Add to watch Later</button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
