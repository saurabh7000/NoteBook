import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../Actions/Notes";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchNote(query));
    navigate("/searchResult");
  };

  return (
    <div className=" mx-9 my-10 flex box justify-center ">
      <input
        className="p-2 border border-black "
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className=" bg-sky-600 border">
        <h1 className="p-2 text-white" onClick={handleSearch}>
          Search
        </h1>
      </button>
    </div>
  );
};

export default Search;
