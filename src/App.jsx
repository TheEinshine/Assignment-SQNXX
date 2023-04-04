import React, { createContext, useEffect, useState } from "react";

import Home from "./components/Home";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import MainCSS from "./assets/css/Main.css";

import CRUD from "./components/CRUD";

import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";

import Edit from "./components/Edit";
import Details from "./components/Details";

export const mainData = createContext();

const App = () => {
  const [color, setColor] = useState("rgb(0,0,0)");
  const [log, setLog] = useState(true);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    function generateColor() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let color = "rgb(" + red + ", " + green + ", " + blue + ")";
      return color;
    }
    setColor(generateColor());
  }, []);

  return (
    <>
      <mainData.Provider
        value={{ color, setColor, log, setLog, name, image, setImage, setName }}
      >
        <Navbar />
        {log ? (
          <Routes>
            <Route exact path="/" Component={CRUD} />
            <Route exact path="/register" Component={Register} />
            <Route exact path="/edit/:id" Component={Edit} />
            <Route exact path="/view/:id" Component={Details} />
          </Routes>
        ) : (
          <Home />
        )}
        <Footer />
      </mainData.Provider>
    </>
  );
};

export default App;
