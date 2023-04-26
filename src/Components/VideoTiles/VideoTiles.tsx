import { Link, useLocation } from "react-router-dom";

import { useWatchLaterVideos, useLikedVideos } from "../../Context";
import "./vidoetiles.css";

const VideoTiles = (props: any) => {
  const { id, title, duration, description, thumbnail } = props;
  const { removeFromLikedVideos, addLikedVideos, likedVideos } =
    useLikedVideos();
  const { removeFromWatchLater, addToWatchLater, watchLaterVideos } =
    useWatchLaterVideos();
  const location = useLocation();

  const isAddedToLikeVideos = likedVideos.find((video: any) => video.id === id);
  const isAddedToWatchLater = watchLaterVideos.find(
    (video: any) => video.id === id
  );

  return (
    <div>
      <div className="video-tile-wrapper">
        <div className="img">
          <Link to={`/video/${id}`}>
            <img src={thumbnail} alt={title} />
          </Link>
        </div>
        <div className="video-tile-text">
          <h2>{title}</h2>
          <p>
            <b>Description: </b>
            <span>{description}</span>
          </p>
          <p>Duration: {duration}</p>
          <div>
            {location.pathname === "/likedvideos" ? (
              <button onClick={() => removeFromLikedVideos(id)}>Remove</button>
            ) : isAddedToLikeVideos ? (
              <button>Liked</button>
            ) : (
              <button onClick={() => addLikedVideos(props)}>Like</button>
            )}

            {location.pathname === "/watchlater" ? (
              <button onClick={() => removeFromWatchLater(id)}>Remove</button>
            ) : isAddedToWatchLater ? (
              <button>Added To Watch Later</button>
            ) : (
              <button onClick={() => addToWatchLater(props)}>
                Add To Watch Later
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTiles;
