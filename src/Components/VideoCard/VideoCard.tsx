import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./videocard.css";
import { useLikedVideos } from "../../Context/LikedVideo-context/LikedVideo-context";
import { useWatchLaterVideos } from "../../Context/Watchlater-context/WatchLater-context";

const VideoCard = (props: any) => {
  const { id, title, thumbnail } = props;
  const { addLikedVideos, likedVideos } = useLikedVideos();
  const { watchLaterVideos, addToWatchLater } = useWatchLaterVideos();
  const isLiked = likedVideos.find((video: any) => video.id === id);
  const isAddedToWatchLater = watchLaterVideos.find(
    (video: any) => video.id === id
  );

  return (
    <div>
      <div className="video-card">
        <div className="img-container">
          <img src={thumbnail} alt={title} />
        </div>

        <div className="video-card-text">
          <p>{title}</p>
          <div className="btn">
            <div>
              <Link to={`/video/${id}`}>watch here</Link>
            </div>
            {isLiked ? (
              <button>Liked</button>
            ) : (
              <button onClick={() => addLikedVideos(props)}>Like</button>
            )}
            {isAddedToWatchLater ? (
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

export default VideoCard;
