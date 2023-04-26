import { Link } from "react-router-dom";
import { useLikedVideos, useWatchLaterVideos } from "../../Context";
import "./videocard.css";

const VideoCard = (props: any) => {
  const { id, title, thumbnail } = props;
  const { addLikedVideos, likedVideos, removeFromLikedVideos } =
    useLikedVideos();
  const { watchLaterVideos, addToWatchLater, removeFromWatchLater } =
    useWatchLaterVideos();
  const isLiked = likedVideos.find((video: any) => video.id === id);
  const isAddedToWatchLater = watchLaterVideos.find(
    (video: any) => video.id === id
  );

  return (
    <div>
      <div className="video-card">
        <div className="img-container">
          <Link to={`/video/${id}`}>
            <img src={thumbnail} alt={title} />
          </Link>
        </div>

        <div className="video-card-text">
          <p>{title}</p>
          <div className="btn">
            <div>
              <Link to={`/video/${id}`}>watch here</Link>
            </div>
            {isLiked ? (
              <button onClick={() => removeFromLikedVideos(id)}>Liked</button>
            ) : (
              <button onClick={() => addLikedVideos(props)}>Like</button>
            )}
            {isAddedToWatchLater ? (
              <button onClick={() => removeFromWatchLater(id)}>
                Added To Watch Later
              </button>
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

export default VideoCard;
