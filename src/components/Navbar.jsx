import React, { useContext } from "react";
import ReloadSvg from "../assets/imgs/reload.svg";
import NavbarStyles from "../assets/css/Navbar.css?";
import { mainData } from "../App";

function Navbar() {
  const { log, setLog, name,  setName} = useContext(mainData);

  const date = new Date();
  let currentDate = `${date.getHours()}:${date.getMinutes()}`;
  const color = useContext(mainData);

  return (
    <nav style={{ color: color.color }}>
      <div className="nav-left">
        <div className="nav-item nav-logo">
          {name == "" ? "@SQUPUS" : "@" + name}
        </div>
      </div>
      <div className="nav-mid">
        <p id="navbarImgP">
          {currentDate}{" "}
          <button
            id="reloadImgButton"
            style={{ backgroundColor: color.color }}
            onClick={() => {
              location.reload();
            }}
          >
            {" "}
            <img id="reloadImg" src={ReloadSvg} alt="ReLoad" />{" "}
          </button>{" "}
        </p>
      </div>
      <div className="nav-right">
        {log ? (
          <p
            onClick={() => {
              setLog(false);
              setName('What Happened?');
              alert("You have been logged out, No cookies are stored");
            }}
            style={{ cursor: "pointer" }}
          >
            Sign Out
          </p>
        ) : (
          <p>Google's Font</p>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
