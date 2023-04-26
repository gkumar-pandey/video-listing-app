import { Title, VideoCard, GridContainer, Container } from "../../Components";
import { useVideos } from "../../Context";

const Videopage = () => {
  const { videos } = useVideos();

  return (
    <div className="bg-color">
      <Container>
        <Title title="All Videos" />
        {videos.length > 0 ? (
          <div>
            <GridContainer>
              {videos.map((video: any) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </GridContainer>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h1>Loading...</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Videopage;
