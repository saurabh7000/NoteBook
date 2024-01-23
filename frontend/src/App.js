import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from "./pages/Home";
import CardDetails from "./components/CardDetails";
import store from "./store";
import { Provider } from "react-redux";
import Add from "./components/AddNote";
import EditNote from "./components/EditNote";
import SearchSection from "./components/SearchSection";

const options = {
  position: "bottom center",
  timeout: 5000,
  offset: "30px",
  transition: "fade",
};

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardDeatails/:id" element={<CardDetails />} />
            <Route path="/addNewNote" element={<Add />} />
            <Route path="/editNote" element={<EditNote />} />
            <Route path="/searchResult" element={<SearchSection />} />
          </Routes>
        </AlertProvider>
      </Provider>
    </Router>
  );
};

export default App;
