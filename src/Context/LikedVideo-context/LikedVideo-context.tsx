import { createContext, useContext, useState } from "react";

const likedVideoContext = createContext<any | null>(null);

export const LikedVideosProvider = ({ children }: any) => {
    const [likedVideos, setLikedVideos] = useState<any>([]);

    const addLikedVideos = (video: any) => {
        setLikedVideos((pre: any) => [...pre, video])
    }
    return <likedVideoContext.Provider value={{ likedVideos, addLikedVideos }} >
        {children}
    </likedVideoContext.Provider>
}


export const useLikedVideos = () => useContext(likedVideoContext
)