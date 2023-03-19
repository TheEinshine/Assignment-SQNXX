import React, { useEffect, useState } from "react";
import ReloadSvg from "../assets/imgs/reload.svg";
import NavbarStyles from "../assets/css/Navbar.css?";

function Navbar() {
  const [color, setColor] = useState("rgb(0,0,0)");
  useEffect(() => {
    function generateColor() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let color = "rgb(" + red + ", " + green + ", " + blue + ")";
      return color;
      
    }
    // console.log(generateColor());
    setColor(generateColor());
  }, []);
  console.log();
  const date = new Date();
  let currentDate = `${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}`;

  return (
    <nav style={{color:color.toString()}}> 
      <div className="nav-left">
        <div className="nav-item nav-logo">@shine</div>
      </div>
      <div className="nav-mid">
        <p id="navbarImgP">
          {currentDate}{" "}
          <button
            id="reloadImgButton"
            style={{ backgroundColor: color.toString()}}
            onClick={() => {
              location.reload();
            }}
          >
            {" "}
            <img id="reloadImg" src={ReloadSvg} alt="ReLoad" />{" "}
          </button>{" "}
        </p>
      </div>
      <div className="nav-right"></div>
    </nav>
  );
}

export default Navbar;
