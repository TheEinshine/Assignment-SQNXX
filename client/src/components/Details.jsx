import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DetailStyles from "../assets/css/Details.css";

const Details = () => {
    const navigate = useNavigate();
  const { id } = useParams("");
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const res = await fetch(`http://localhost:5003/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await res.json();
    console.log(resData);

    if (res.status === 422 || !resData.userIndividual) {
      console.log("Invalid data");
    } else {
      setUserData(resData.userIndividual);
      console.log("data fetched Successfully");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteuser = async (id) => {
    
    const res3 = await fetch(`http://localhost:5003/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedData = await res3.json();
    console.log(deletedData);

    if (res3.status === 422 || !deletedData) {
      console.log("Invalid data");
    } else {  
      console.log("data deleted Successfully");
     
      navigate(-1);
    }
  };

  return (
    <div className="user-details">
      <div className="container">
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
      <h2 className="user-details__title">User Details:</h2>
      <div className="user-details__info">
        <div className="user-details__row">
          <span className="user-details__label">Name:</span>
          <span className="user-details__value">{userData.name}</span>
        </div>
        <div className="user-details__row">
          <span className="user-details__label">Email:</span>
          <span className="user-details__value">{userData.email}</span>
        </div>
        <div className="user-details__row">
          <span className="user-details__label">Description:</span>
          <span className="user-details__value">{userData.description}</span>
        </div>
      </div>
      <Link to={`/edit/${userData._id}`} className="editBtn">
        <button className="editBtn">Edit</button>
      </Link>
      <Link className="deleteBtn">
        <button onClick={()=>{deleteuser(userData._id)}} className="deleteBtn">Delete</button>
      </Link>
    </div>
  );
};

export default Details;
