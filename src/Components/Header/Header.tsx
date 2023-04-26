import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { useLikedVideos, useWatchLaterVideos } from "../../Context";
import "./Header.css";

const Header = () => {
  const { likedVideos } = useLikedVideos();
  const { watchLaterVideos } = useWatchLaterVideos();
  const activeLinkStyle = ({ isActive }: any) => ({
    backgroundColor: isActive ? "purple" : ""
  });

  return (
    <div className="header">
      <Container>
        <div className="header-wrapper">
          <div>
            <h2 className="logo">Videos</h2>
          </div>
          <nav>
            <NavLink to={"/"} style={activeLinkStyle} className="nav-link">
              Home
            </NavLink>
            <NavLink
              to={"/videos"}
              style={activeLinkStyle}
              className="nav-link"
            >
              Videos
            </NavLink>
            <NavLink
              to={"/likedvideos"}
              style={activeLinkStyle}
              className="nav-link"
            >
              Liked Videos({likedVideos.length}){" "}
            </NavLink>
            <NavLink
              to={"/watchlater"}
              style={activeLinkStyle}
              className="nav-link"
            >
              Watch Later({watchLaterVideos.length})
            </NavLink>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
