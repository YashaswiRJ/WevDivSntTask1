import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "../AppComponents/App";
import TryAgain from "./TryAgain";
import LogIn from "./LogIn";
import DataSet from "./DataSet";

function Register() {
  const [dotArray, setDotArray] = useState([]);
  const [dotString, setDotString] = useState("");
  const [info, setInfo] = useState({
    name: "",
    password: "",
    cnf_password: "",
    email: "",
  });
  const [infor, setInfor] = useState({
    name: "",
    password: "",
    email: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function addInList() {
    if (info.password === info.cnf_password) {
      setInfor({
        name: info.name,
        password: info.password,
        email: info.email,
      });
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
    } else {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <div>
          <TryAgain />
          <LogIn />
        </div>
      );
    }
  }
  function signin() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<LogIn />);
  }

  return (
    <div>
      <h1>
        <center>Sign Up</center>
      </h1>
      <label>Name</label>
      <br />
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={info.name}
      />
      <br />
      <br />
      <label>Password</label>
      <br />
      <input
        type="text"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={info.password}
      />
      <br />
      <br />
      <label>Confirm Password</label>
      <br />
      <input
        type="text"
        placeholder="Confirm Password"
        name="cnf_password"
        onChange={handleChange}
        value={info.cnf_password}
      />
      <br />
      <br />
      <label>Email</label>
      <br />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={addInList}>Sign Up</button>
      <br />
      <br />
      <br />
      <p>Already Signed UP ? Click here for Sign In</p>
      <button onClick={signin}>SIGN IN</button>
    </div>
  );
}

export default Register;
