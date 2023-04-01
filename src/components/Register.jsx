import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterStyle from "../assets/css/Register.css";

const Register = () => {
  const navigate = useNavigate();
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

  const addInputData = async (e) => {
    e.preventDefault();
    const { name, email, description } = data;
    const res = await fetch("https://mongoserver-2d84.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        description,
      }),
    });
    const resData = await res.json();
    console.log(resData);

    if (res.status === 422 || !resData) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate(-1);
    }
  };

  return (
    <>
      <div className="container">
        <Link to="/">Home</Link>
        <form className="register-form">
          <h2>Register</h2>
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
          <button
            type="submit"
            onClick={addInputData}
            className="btn btn-primary"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
