import React from 'react'
import Container from '../../Components/Container/Container'
import GridContainer from '../../Components/GridContainer/GridContainer'
import { useLikedVideos } from '../../Context/LikedVideo-context/LikedVideo-context'
import VideoCard from '../../Components/VideoCard/VideoCard'

const LikedVideoPage = () => {
    const { likedVideos } = useLikedVideos()
    return (
        <div>
            <Container>
                <GridContainer>
                    {
                        likedVideos.map((video: object) => <VideoCard {...video} />)
                    }
                </GridContainer>
            </Container>
        </div>
    )
}

export default LikedVideoPage