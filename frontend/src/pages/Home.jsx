import React from "react";
import Navbar from "../components/Navbar";
import CardSection from "../components/CardSection";
import Search from "../components/Search.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <CardSection />
    </div>
  );
};

export default Home;
