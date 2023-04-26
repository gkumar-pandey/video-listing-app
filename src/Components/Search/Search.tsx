import React from "react";

const Search = () => {
  const searchStyle = {
    padding: "8px 5px",
    width: "300px",
    border:'none',
    borderRadius: "5px"
  };
  return (
    <div>
      <input type="text" style={searchStyle} placeholder="Search..." />
    </div>
  );
};

export default Search;
