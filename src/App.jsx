import React, { createContext, useEffect, useState } from "react";

import Home from "./components/Home";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import MainCSS from "./assets/css/Main.css";

import CRUD from "./components/CRUD";

export const mainData = createContext();

const App = () => {
  const [color, setColor] = useState("rgb(0,0,0)");
  const [log, setLog] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage]= useState('')


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
      <mainData.Provider value={{ color, setColor, log, setLog , name , image, setImage , setName}}>
        <Navbar />
        {log ? <CRUD/>  : <Home />}
        <Footer />
      </mainData.Provider>
    </>
  );
};

export default App;
