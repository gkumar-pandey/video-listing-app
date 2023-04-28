import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../../Api/api";

const videoContext = createContext<any | null>(null);

export const VideoProvider = ({ children }: any) => {
  const [videos, setVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  const getData = async () => {
    const url = "https://example.com/api/videos";

    try {
      const { status, data }: any = await fakeFetch(url);
      if (status === 200) {
        setVideos(data.videos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const searchHandler = (e: any) => {
    setSearchInput(e.target.value);
  };

  const filterHandler = () => {
    const filteredData = videos.filter((video: any) =>
      video.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredVideos(filteredData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterHandler();
  }, [searchInput]);

  return (
    <videoContext.Provider
      value={{ videos, searchHandler, searchInput, filteredVideos }}
    >
      {children}
    </videoContext.Provider>
  );
};

export const useVideos = () => useContext(videoContext);
