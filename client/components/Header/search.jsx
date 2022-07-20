import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="serachDiv">
      <FiSearch />
      <input
        type="search"
        placeholder="What are you looking for?"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(search)}
      />
    </form>
  );
};

export default Search;
