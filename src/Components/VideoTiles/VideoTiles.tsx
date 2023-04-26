import "./vidoetiles.css";
import { useWatchLaterVideos } from "../../Context/Watchlater-context/WatchLater-context";
import { useLocation } from "react-router-dom";
import { useLikedVideos } from "../../Context/LikedVideo-context/LikedVideo-context";

const VideoTiles = (props: any) => {
  const { id, title, url, duration, description, thumbnail } = props;
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
          <img src={thumbnail} alt={title} />
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
