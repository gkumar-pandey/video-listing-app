import { createContext, useContext, useState } from "react";

const likedVideoContext = createContext<any | null>(null);

export const LikedVideosProvider = ({ children }: any) => {
  const [likedVideos, setLikedVideos] = useState<any>([]);

  const addLikedVideos = (video: any) => {
    setLikedVideos((pre: any) => [...pre, video]);
  };

  const removeFromLikedVideos = (videoId: any) => {
    setLikedVideos((pre: any) =>
      likedVideos.filter((video: any) => video.id !== videoId)
    );
  };

  return (
    <likedVideoContext.Provider
      value={{ likedVideos, addLikedVideos, removeFromLikedVideos }}
    >
      {children}
    </likedVideoContext.Provider>
  );
};

export const useLikedVideos = () => useContext(likedVideoContext);
