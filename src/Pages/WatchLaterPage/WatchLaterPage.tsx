import React from "react";
import { useWatchLaterVideos } from "../../Context/Watchlater-context/WatchLater-context";
import Container from "../../Components/Container/Container";
import GridContainer from "../../Components/GridContainer/GridContainer";
import VideoCard from "../../Components/VideoCard/VideoCard";
import Title from "../../Components/Title/Title";

const WatchLaterPage = () => {
  const { watchLaterVideos } = useWatchLaterVideos();
  return (
    <div className="bg-color">
      <Container>
        <Title title="Watch Later Videos" />
        <GridContainer>
          {watchLaterVideos.map((video: object) => (
            <VideoCard {...video} />
          ))}
        </GridContainer>
      </Container>
    </div>
  );
};

export default WatchLaterPage;
