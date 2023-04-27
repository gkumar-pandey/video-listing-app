import { useVideos } from "../../Context";
import "./search.css";

const Search = () => {
  const { searchHandler } = useVideos();
  return (
    <>
      <input
        type="text"
        onChange={(e) => searchHandler(e)}
        className="search"
        placeholder="Search..."
      />
    </>
  );
};

export default Search;
