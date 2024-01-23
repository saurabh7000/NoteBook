import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchResult = () => {
  let navigate = useNavigate();

  const getCardDetails = (id) => () => {
    let path = `/cardDeatails/${id}`;
    navigate(path);
  };

  const { searchNotes } = useSelector((state) => state.searchNote);

  return (
    <div className="flex flex-wrap">
      <div
        onClick={getCardDetails(searchNotes._id)}
        className="flex justify-center m-10 border border-black w-60 no-underline rounded bg-yellow-200 hover:cursor-pointer"
      >
        <h1 className="p-2 text-2xl no-underline">{searchNotes.title}</h1>
      </div>
    </div>
  );
};

export default SearchResult;
