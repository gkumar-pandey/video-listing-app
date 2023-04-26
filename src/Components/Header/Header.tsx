
import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
import './Header.css'
import { useLikedVideos } from '../../Context/LikedVideo-context/LikedVideo-context'

const Header = () => {
    const { likedVideos } = useLikedVideos();
    return (
        <div className='header' >
            <Container>
                <div className='header-wrapper' >
                    <div>
                        <h2 className='logo' >Videos</h2>
                    </div>
                    <nav>
                        <NavLink to={'/'} className='nav-link' >Home</NavLink>
                        <NavLink to={'/videos'} className='nav-link'  >Videos</NavLink>
                        <NavLink to={'/likedvideos'} className='nav-link'  >Liked Videos({likedVideos.length}) </NavLink>
                        <NavLink to={'/watchlater'} className='nav-link'  >Watch Later</NavLink>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default Header