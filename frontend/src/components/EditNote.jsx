import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateNote } from "../Actions/Notes";
import { useAlert } from "react-alert";
import NavbarTwo from "./NavbarTwo";

const EditNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { noteDetails } = useSelector((state) => state.noteDetail);

  const returnHome = () => {
    const path = `/cardDeatails/${noteDetails._id}`;
    navigate(path);
  };

  const [title, setTitle] = useState(noteDetails.title);
  const [description, setDescription] = useState(noteDetails.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title + " " + description);
    dispatch(updateNote(noteDetails._id, title, description));

    alert.success("Note has been successfully created ! ");
    navigate(`/cardDeatails/${noteDetails._id}`);
  };

  return (
    <div>
      <NavbarTwo />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="m-2">
            <input
              type="text"
              placeholder="Title"
              className="flex w-[100%] p-2 mt-5"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Descriptions..."
              className="w-[100%]"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-center text-white">
            <input
              type="submit"
              className="bg-sky-500 m-2 h-10 w-[100px] rounded p-[5px]"
            />
            <button
              className="bg-sky-500 m-2 h-10 w-[100px] rounded p-[5px]"
              onClick={returnHome}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
