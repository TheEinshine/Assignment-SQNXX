import React, { useContext } from "react";
import { mainData } from "../App";
import CrudStyles from "../assets/css/Crud.css";

const CRUD = () => {
  const { image, name } = useContext(mainData);
  let user = name.split(' ')[0];

  return (
    <div className="main">
      <div>
        <img src={image} alt={name} />
        <p className="userTagline">Hey {user} Welcome to a Assigned Project</p>
      </div>
    </div>
  );
};

export default CRUD;
