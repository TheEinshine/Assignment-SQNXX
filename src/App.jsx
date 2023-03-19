import React from "react";

import Home from "./components/Home";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import MainCSS from "./assets/css/Main.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
