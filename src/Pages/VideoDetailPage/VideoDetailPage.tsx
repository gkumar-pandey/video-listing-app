import { useParams } from "react-router-dom";

import { VideoDetails, Container } from "../../Components";
import { useVideos } from "../../Context";

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
