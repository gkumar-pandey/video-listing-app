import React from "react";
import { useWatchLaterVideos } from "../../Context/Watchlater-context/WatchLater-context";
import Container from "../../Components/Container/Container";
import GridContainer from "../../Components/GridContainer/GridContainer";
import VideoCard from "../../Components/VideoCard/VideoCard";
import Title from "../../Components/Title/Title";
import VideoTiles from "../../Components/VideoTiles/VideoTiles";

const WatchLaterPage = () => {
  const { watchLaterVideos } = useWatchLaterVideos();
  return (
    <div className="bg-color">
      <Container>
        <Title title="Watch Later Videos" />
        <>
          {watchLaterVideos.map((video: object) => (
            <VideoTiles {...video} />
          ))}
        </>
      </Container>
    </div>
  );
};

export default WatchLaterPage;
