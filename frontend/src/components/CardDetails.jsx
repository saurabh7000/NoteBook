import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardDetail, deleteNote } from "../Actions/Notes";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import NavbarTwo from "./NavbarTwo";

const CardDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const alert = useAlert();
  const navigate = useNavigate();

  const { noteDetails } = useSelector((state) => state.noteDetail);

  const deleteNoteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteNote(id));
    alert.success("Note has been successfully deleted");
    navigate("/");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/editNote");
  };

  useEffect(() => {
    dispatch(getCardDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavbarTwo />
      <div className=" p-2 overflow-auto bg-yellow-100 w-[100vw] h-[100vh]">
        <div className="p-2 ml-2 mb-2">
          <h1 className=" text-black text-2xl text-bold">
            {noteDetails.title}
          </h1>
        </div>
        <div className="p-2 mb-5 ">
          <p className="text-xl break-words">{noteDetails.description}</p>
        </div>

        <div className="flex justify-evenly text-white text-xl">
          <div className="bg-blue-400 rounded">
            <button className="px-6 py-2" onClick={handleEdit}>
              Edit
            </button>
          </div>

          <div className="bg-blue-400 rounded">
            <button className="px-3 py-2" onClick={deleteNoteHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
