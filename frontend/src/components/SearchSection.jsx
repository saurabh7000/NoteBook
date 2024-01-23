import React from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";
import NavbarTwo from "./NavbarTwo";

const SearchSection = () => {
  return (
    <div>
      <NavbarTwo />
      <Search />
      <SearchResult />
    </div>
  );
};

export default SearchSection;
