import React from "react";
import Container from "../../Components/Container/Container";
import { useVideos } from "../../Context/Video-context/Video-Context";
import VideoCard from "../../Components/VideoCard/VideoCard";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { useLikedVideos } from "../../Context/LikedVideo-context/LikedVideo-context";
import Title from "../../Components/Title/Title";

const Videopage = () => {
  const { videos } = useVideos();

  return (
    <div className="bg-color">
      <Container>
        <Title title="All Videos" />
        <GridContainer>
          {videos.map((video: any) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </GridContainer>
      </Container>
    </div>
  );
};

export default Videopage;
