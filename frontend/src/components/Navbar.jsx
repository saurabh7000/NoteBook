import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const addNote = () => {
    const path = "addNewNote";
    navigate(path);
  };

  return (
    <div className="flex bg-gray-500">
      <img
        className="w-[60px] h-[45px] m-2 rounded-md md:w-20 my-auto"
        src="https://img.freepik.com/free-photo/book-icon-front-side_187299-39430.jpg?w=740&t=st=1694271184~exp=1694271784~hmac=86c7acb1677b04005d2d62f5244922337694c3d8577b9d8787bf0bb512668b7e"
        alt=""
      />
      <h1 className="m-auto text-3xl text-bold text-amber-300">NoteBook</h1>
      <button
        onClick={addNote}
        className="block w-20 m-5 h-10 bg-blue-600 text-white rounded font-bold cursor-pointer"
      >
        ADD
      </button>
    </div>
  );
};

export default Navbar;
