import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllNotes } from "../Actions/Notes";

const Card = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const getCardDetails = (id) => () => {
    let path = `cardDeatails/${id}`;
    navigate(path);
  };

  const { notes } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap">
      {notes.map((item, index) => (
        <div
          onClick={getCardDetails(item._id)}
          className=" flex justify-center m-10 border border-black w-60 no-underline rounded bg-yellow-200 hover:cursor-pointer"
        >
          <h1 className="p-2 text-2xl no-underline" key={index}>
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
