import React, { useContext, useEffect } from "react";
import { mainData } from "../App";
import HomeStyles from "../assets/css/Home.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./FirebaseConfig";

const Home = () => {
  const color = useContext(mainData);
  const { log, setLog, setImage , setName } = useContext(mainData);


    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    const handleGoogleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // Signed in successfully
          const user = result.user;
          // console.log(user);
          setLog(true);
          setImage(user.photoURL)
          setName(user.displayName)
        })  
        .catch((error) => {
          // Error occurred while signing in
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };

  return (
    <div className="mainDiv">
      <div className="firstDiv">
        <div className="divInsideFirstDivFour equalProp">
          <p
            onClick={handleGoogleSignIn}
            className="SignInPara"
            style={{ color: color.color }}
          >
            Sign Up with Google :)
          </p>
        </div>
        <div onClick={handleGoogleSignIn} className=" logInDiv equalProp"
        style={{ color: color.color }}>
          Log In with Google :)
        </div>
        <div onClick={handleGoogleSignIn} className="nextDiv">
          Welcome to Assigned CRUD WebApp.
        </div>
      </div>
      <div className="secondDiv"></div>
    </div>
  );
};

export default Home;
