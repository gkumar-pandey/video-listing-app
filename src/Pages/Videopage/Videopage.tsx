import { Title, VideoCard, GridContainer, Container } from "../../Components";
import { useVideos } from "../../Context";

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
