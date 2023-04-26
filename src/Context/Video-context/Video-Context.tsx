import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../../Api/api";

const videoContext = createContext<any | null>(null)

export const VideoProvider = ({ children }: any) => {
    const [videos, setVideos] = useState([]);

    const getData = async () => {
        const url = 'https://example.com/api/videos';

        try {
            const { status, data }: any = await fakeFetch(url)
            if (status === 200) {
                setVideos(data.videos)
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getData()
    }, [])

    return <videoContext.Provider value={{ videos }} >
        {children}
    </videoContext.Provider>
}

export const useVideos = () => useContext(videoContext)