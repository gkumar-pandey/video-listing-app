import { Container, Title, VideoTiles } from "../../Components";
import { useWatchLaterVideos } from "../../Context";

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
