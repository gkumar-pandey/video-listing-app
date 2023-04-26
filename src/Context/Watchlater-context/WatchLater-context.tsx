import { createContext, useContext, useState } from "react";

const watchLaterVideosContext = createContext<any | null>(null);

export const WatchLaterVideosProvider = ({ children }: any) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState<any>([]);

  const addToWatchLater = (video: any) => {
    setWatchLaterVideos((pre: any) => [...pre, video]);
  };
  const removeFromWatchLater = (videoId: number) => {
    setWatchLaterVideos((pre: object[]) =>
      pre.filter((video: any) => video.id !== videoId)
    );
  };
  return (
    <watchLaterVideosContext.Provider
      value={{ watchLaterVideos, addToWatchLater, removeFromWatchLater }}
    >
      {children}
    </watchLaterVideosContext.Provider>
  );
};

export const useWatchLaterVideos = () => useContext(watchLaterVideosContext);
