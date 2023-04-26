import { useWatchLaterVideos, useLikedVideos } from "../../Context";
import "./VideoDetails.css";

const VideoDetails = (props: any) => {
  const { id, title, url, duration, description } = props;
  const ytVideoId = url?.split("=");
  const { likedVideos, addLikedVideos } = useLikedVideos();
  const { watchLaterVideos, addToWatchLater } = useWatchLaterVideos();

  const isLiked = likedVideos.find((video: any) => video.id === id);
  const isWatchLater = watchLaterVideos.find((video: any) => video.id === id);

  return (
    <div>
      <div className="video-details-wrapper">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              ytVideoId[ytVideoId.length - 1]
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="video-details-text">
          <h2>{title}</h2>
          <p>
            <b>Discription: </b>
            {description}
          </p>
          <p>Duration: {duration}</p>
        </div>
        <div className="video-details-btn">
          {isLiked ? (
            <button>Liked</button>
          ) : (
            <button onClick={() => addLikedVideos(props)}>Like</button>
          )}
          {isWatchLater ? (
            <button>Added To Watch Later</button>
          ) : (
            <button onClick={() => addToWatchLater(props)}>
              Add To Watch Later
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
