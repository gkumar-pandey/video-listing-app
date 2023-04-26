import { Link } from "react-router-dom";
import { Title, Container, VideoTiles } from "../../Components";
import { useLikedVideos } from "../../Context";

const LikedVideoPage = () => {
  const { likedVideos } = useLikedVideos();
  return (
    <div className="bg-color">
      <Container>
        <Title title="Liked Videos" />
        {likedVideos.length === 0 && (
          <p style={{ margin: "1rem", textAlign: "center" }}>
            There are no videos.{" "}
            <Link to={"/videos"} style={{ color: "#fff" }}>
              <b>Explore Videos</b>
            </Link>{" "}
          </p>
        )}
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
