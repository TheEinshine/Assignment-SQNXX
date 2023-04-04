import React, { useContext, useEffect, useState } from "react";
import { mainData } from "../App";
import CrudStyles from "../assets/css/Crud.css";
import { Link } from "react-router-dom";

const CRUD = () => {
  const [getUserData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const getData = async (e) => {
    const res = await fetch("https://mongoserver-2d84.onrender.com/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await res.json();

    if (res.status === 422 || !resData.userData) {
      console.log("Invalid data");
    } else {
      setUserData(resData.userData);
      setLoading(false); 
      console.log("data fetched Successfully");
    }
  };

  const { image, name } = useContext(mainData);
  let user = name.split(" ")[0];

  useEffect(() => {
    getData();
  }, []);

  const deleteuser = async (id) => {
    const res3 = await fetch(
      `https://mongoserver-2d84.onrender.com/deleteuser/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const deletedData = await res3.json();

    if (res3.status === 422 || !deletedData) {
      console.log("Invalid data");
    } else {
      console.log("data deleted Successfully");
      getData();
    }
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <img src={image} alt={name} />
          <p className="userTagline">
            Hey {user}, welcome to an Assigned Project
          </p>
          <div className="addDataWrapper">
            <Link to="/Register" className="addData">
              Add Data
            </Link>
          </div>
        </div>
        {loading ? ( 
          <div className="loader"></div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
              <td>0</td>
              <td>Test</td>
              <td>HardCodedTest@test.com</td>
              <td>Ignore this HardCoded Manually</td>
              <td>
                <Link to={`view/${"0123"}`} className="viewBtn">
                  <button className="viewBtn">View</button>
                </Link>

                <Link to={`edit/${"0123"}`} className="editBtn">
                  <button className="editBtn">Edit</button>
                </Link>
                <Link className="deleteBtn">
                  <button className="deleteBtn">Delete</button>
                </Link>
              </td>

              */}
              {getUserData.map((item, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ind + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.description}</td>
                    <td>
                      <Link to={`view/${item._id}`} className="viewBtn">
                        <button className="viewBtn">View</button>
                      </Link>
                      <Link to={`edit/${item._id}`} className="editBtn">
                        <button className="editBtn">Edit</button>
                      </Link>
                      <Link className="deleteBtn">
                        <button
                          onClick={() => {
                            deleteuser(item._id);
                          }}
                          className="deleteBtn"
                        >
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default CRUD;
