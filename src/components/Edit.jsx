import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RegisterStyle from "../assets/css/Register.css";

const Edit = () => {

  const navigate = useNavigate();
 
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleNameChange = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const getData = async () => {
    const res = await fetch(`https://mongoserver-2d84.onrender.com/getuser/${id}`, {
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
      console.log("data fetched Successfully");
      setData(resData.userIndividual);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateuser = async (e)=> {
    e.preventDefault();
    const { name, email, description } = data;
    const res2 = await fetch(`https://mongoserver-2d84.onrender.com/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        description,
      })
    });
    const resData2 = await res2.json();
    console.log(resData2);

    if(res2.status === 422 || !resData2){
      window.alert("Invalid Update");
      console.log("Invalid Update");
  } else {
      window.alert("Update Successful");
      console.log("Update Successful");
      navigate(-1);
  }
  }


  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <form className="register-form">
          <h2>Edit</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={data.name}
              onChange={handleNameChange}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={data.email}
              onChange={handleEmailChange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              value={data.description}
              onChange={handleDescriptionChange}
              id="description"
              name="description"
              placeholder="Enter a description"
              className="form-control"
            />
          </div>
          <button onClick={updateuser} type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
