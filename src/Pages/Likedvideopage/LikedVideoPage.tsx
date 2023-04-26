import { Title, Container, VideoTiles } from "../../Components";
import { useLikedVideos } from "../../Context";

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
