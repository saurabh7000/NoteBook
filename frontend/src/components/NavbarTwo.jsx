import React from "react";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const NavbarTwo = () => {
  const navigate = useNavigate();

  const handlerHome = () => {
    navigate("/");
  };

  return (
    <div className="flex bg-gray-500">
      <h1 className="m-auto text-3xl text-bold text-amber-300">NoteBook</h1>
      <button
        onClick={handlerHome}
        className="block  w-10 m-5 mr-10 h-10 bg-blue-600 text-white rounded font-bold cursor-pointer"
      >
        <HomeOutlinedIcon />
      </button>
    </div>
  );
};

export default NavbarTwo;
