import React from "react";
import "./HeroComp.css";
import { Link } from "react-router-dom";

const HeroComp = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h2 className="welcome-text">Welcome To Neog Video Library</h2>
          <div>
            <h2 className="text">
              To browse all videos , click on the below button or go to the
              video page
            </h2>
            <Link to={"/videos"}>
              <button>Explore Videos</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
