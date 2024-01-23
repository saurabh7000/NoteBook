import { configureStore } from "@reduxjs/toolkit";
import {
  createNote,
  deleteReducer,
  getAllNotes,
  getCardDetail,
  searchNoteReducer,
  updateNoteReducer,
} from "./Reducer/Notes";

const store = configureStore({
  reducer: {
    notes: getAllNotes,
    noteDetail: getCardDetail,
    note: createNote,
    deleteNote: deleteReducer,
    updateNote: updateNoteReducer,
    searchNote: searchNoteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
