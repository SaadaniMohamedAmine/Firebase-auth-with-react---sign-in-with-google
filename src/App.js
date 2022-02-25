import React from "react";
import "./App.css";
import { signWithGoogle } from "./firebase-config";

const App = () => {
  return (
    <div className="App">
      <h1>The app component</h1>
      <button className=" btn btn-primary" onClick={signWithGoogle}>
        Sign In With Google
      </button>
      <div className="container">
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem("profilePic")} alt="myImage" />
      </div>
    </div>
  );
};

export default App;
