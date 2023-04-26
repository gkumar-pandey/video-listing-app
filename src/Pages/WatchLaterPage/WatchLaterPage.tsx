import { Link } from "react-router-dom";
import { Container, Title, VideoTiles } from "../../Components";
import { useWatchLaterVideos } from "../../Context";

const WatchLaterPage = () => {
  const { watchLaterVideos } = useWatchLaterVideos();
  return (
    <div className="bg-color">
      <Container>
        <Title title="Watch Later Videos" />
        {watchLaterVideos.length === 0 && (
          <p style={{ margin: "1rem", textAlign: "center" }}>
            There are no videos.{" "}
            <Link to={"/videos"} style={{ color: "#fff" }}>
              <b>Explore Videos</b>
            </Link>{" "}
          </p>
        )}
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
