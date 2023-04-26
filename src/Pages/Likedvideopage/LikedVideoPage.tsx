import React from "react";
import Container from "../../Components/Container/Container";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { useLikedVideos } from "../../Context/LikedVideo-context/LikedVideo-context";
import VideoCard from "../../Components/VideoCard/VideoCard";
import Title from "../../Components/Title/Title";
import VideoTiles from "../../Components/VideoTiles/VideoTiles";

const LikedVideoPage = () => {
  const { likedVideos } = useLikedVideos();
  return (
    <div className="bg-color">
      <Container>
        <Title title="Liked Videos" />
        <>
          {likedVideos.map((video: object) => (
            <VideoTiles {...video} />
          ))}
        </>
      </Container>
    </div>
  );
};

export default LikedVideoPage;
