import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

console.log("Reducer is running");

const newState = { note: {} };

export const createNote = createReducer(newState, {
  createNoteRequest: (state) => {
    state.loading = true;
  },
  createNoteSuccess: (state, action) => {
    state.loading = false;
    state.note = action.payload;
  },

  createNoteFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export const getAllNotes = createReducer(initialState, {
  notesRequest: (state) => {
    state.loading = true;
  },
  notesSuccess: (state, action) => {
    state.loading = false;
    state.notes = action.payload;
  },

  notesFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

// const searchState = { searchNotes: {} };

// export const searchNoteReducer = createReducer(searchState, {
//   searchRequest: (state) => {
//     state.loading = true;
//   },
//   searchSuccess: (state, action) => {
//     state.loading = false;
//     state.searchNotes = action.payload;
//   },

//   searchFailure: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//   },
//   clearErrors: (state) => {
//     state.error = null;
//   },
// });

const searchState = { searchNotes: {} };

export const searchNoteReducer = createReducer(searchState, {
  searchRequest: (state) => {
    state.loading = true;
  },
  searchSuccess: (state, action) => {
    state.loading = false;
    state.searchNotes = action.payload;
  },

  searchFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

const state = { noteDetails: {} };

// For getCardDetail
export const getCardDetail = createReducer(state, {
  getCardDetailRequest: (state) => {
    state.loading = true;
  },
  getCardDetailSuccess: (state, action) => {
    state.loading = false;
    state.noteDetails = action.payload;
  },
  getCardDetailFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

const deleteNote = { deleteNote: {} };

export const deleteReducer = createReducer(deleteNote, {
  deleteNoteRequest: (state) => {
    state.loading = true;
  },
  deleteNoteSuccess: (state, action) => {
    state.loading = false;
    state.deleteNote = action.payload;
  },
  deleteNoteFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

const updateNote = { note: {} };

export const updateNoteReducer = createReducer(updateNote, {
  updateNoteRequest: (state) => {
    state.loading = true;
  },
  updateNoteSuccess: (state, action) => {
    state.loading = false;
    state.note = action.payload;
  },

  updateNoteFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});

export default createNote.reducer;
