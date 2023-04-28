import { Title, VideoCard, GridContainer, Container } from "../../Components";
import { useVideos } from "../../Context";

const Videopage = () => {
  const { videos, filteredVideos, searchInput } = useVideos();

  return (
    <div className="bg-color">
      <Container>
        <Title title="All Videos" />

        {filteredVideos.length > 0 && searchInput ? (
          <div>
            <GridContainer>
              {filteredVideos.map((video: any) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </GridContainer>
          </div>
        ) : searchInput ? (
          <div style={{ textAlign: "center" }}>
            <h2>Video Not Found</h2>
          </div>
        ) : videos.length > 0 ? (
          <GridContainer>
            {videos.map((video: any) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </GridContainer>
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
