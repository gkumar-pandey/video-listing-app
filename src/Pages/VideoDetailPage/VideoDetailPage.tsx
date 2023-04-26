import React from "react";
import { useParams } from "react-router-dom";
import { useVideos } from "../../Context/Video-context/Video-Context";
import VideoDetails from "../../Components/VideoDetails/VideoDetails";
import Container from "../../Components/Container/Container";

const VideoDetailPage = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();
  const video = videos.find((video: any) => video.id === Number(videoId));

  return (
    <div className="bg-color">
      <Container>
        <VideoDetails {...video} />
      </Container>
    </div>
  );
};

export default VideoDetailPage;
