import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNote } from "../Actions/Notes";
import { useAlert } from "react-alert";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const returnHome = () => {
    const path = "/";
    navigate(path);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNote(title, description));

    alert.success("Note has been successfully created ! ");
    navigate("/");
  };

  return (
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
  );
};

export default Add;
