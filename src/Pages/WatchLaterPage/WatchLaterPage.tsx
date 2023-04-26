import React from "react";
import { useWatchLaterVideos } from "../../Context/Watchlater-context/WatchLater-context";
import Container from "../../Components/Container/Container";
import GridContainer from "../../Components/GridContainer/GridContainer";
import VideoCard from "../../Components/VideoCard/VideoCard";

const WatchLaterPage = () => {
    const { watchLaterVideos } = useWatchLaterVideos();
    return (
        <div>
            <Container>
                <GridContainer>
                    {watchLaterVideos.map((video: object) => (
                        <VideoCard {...video} />
                    ))}
                </GridContainer>
            </Container>
        </div>
    );
};

export default WatchLaterPage;
