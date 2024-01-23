import axios from "axios";

console.log("Action is running");

export const createNote = (title, description) => async (dispatch) => {
  try {
    dispatch({
      type: "createNoteRequest",
    });

    await axios
      .post("http://localhost:8000/api/v1/create", { title, description })
      .then((response) => {
        dispatch({
          type: "createNoteSuccess",
          payload: response.data,
        });
      });
  } catch (error) {
    dispatch({
      type: "createNoteFailure",
      payload: error.response,
    });
  }
};

export const getAllNotes = () => async (dispatch) => {
  try {
    dispatch({
      type: "notesRequest",
    });

    const url = `http://localhost:8000/api/v1/getAllNotes`;
    const response = await axios.get(url);

    const notes = response.data.notes;

    dispatch({
      type: "notesSuccess",
      payload: notes,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "notesFailure",
      payload: error.response,
    });
  }
};

// export const searchNote = (query) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "searchRequest",
//     });

//     const response = await axios.get(
//       `http://localhost:8000/api/v1/search?title=${query}`
//     );

//     const note = response.data.result;

//     dispatch({
//       type: "searchSuccess",
//       payload: note,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: "searchFailure",
//       payload: error.response,
//     });
//   }
// };


export const searchNote = (query) => async (dispatch) => {
  try {
    dispatch({
      type: "searchRequest",
    });

    const response = await axios.get(
      `http://localhost:8000/api/v1/search?title=${query}`
    );

    const note = response.data.result[0];
    

    dispatch({
      type: "searchSuccess",
      payload: note,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "searchFailure",
      payload: error.response,
    });
  }
};


export const getCardDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getCardDetailRequest",
    });

    const url = `http://localhost:8000/api/v1/cardDetails/${id}`;

    const { data } = await axios.get(url);

    dispatch({
      type: "getCardDetailSuccess",
      payload: data.note,
    });
  } catch (error) {
    dispatch({
      type: "getCardDetailFailure",
      payload: error.response,
    });
  }
};

export const updateNote = (id, title, description) => async (dispatch) => {
  try {
    dispatch({
      type: "updateNoteRequest",
    });

    console.log(id + " " + title + " " + description);
    await axios
      .put(`http://localhost:8000/api/v1/update/${id}`, { title, description })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "updateNoteSuccess",
          payload: response.data,
        });
      });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "updateNoteFailure",
      payload: error.response,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteNoteRequest",
    });

    const url = `http://localhost:8000/api/v1/delete/${id}`;

    const { data } = await axios.delete(url);
    dispatch({
      type: "deleteNoteSuccess",
      payload: data.note,
    });
  } catch (error) {
    dispatch({
      type: "deleteNoteFailure",
      payload: error.response,
    });
  }
};

//Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: " CLEAR_ERRORS" });
};
