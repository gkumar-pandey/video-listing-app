import React from 'react'
import Container from '../../Components/Container/Container'
import { useVideos } from '../../Context/Video-context/Video-Context'
import VideoCard from '../../Components/VideoCard/VideoCard';
import GridContainer from '../../Components/GridContainer/GridContainer';
import { useLikedVideos } from '../../Context/LikedVideo-context/LikedVideo-context';

const Videopage = () => {

    const { videos } = useVideos();


    return (
        <div>
            <Container>
                <div>
                    <h2>All Vidoes</h2>
                </div>
                <GridContainer>
                    {
                        videos.map((video: any) => <VideoCard key={video.id} {...video} />)
                    }
                </GridContainer>
            </Container>
        </div>
    )
}

export default Videopage