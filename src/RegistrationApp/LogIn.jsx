import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "../AppComponents/App";
import Register from "./Register";
import DataSet from "./DataSet";

function LogIn() {
  const [dotArray, setDotArray] = useState([]);
  const [dotString, setDotString] = useState("");
  const [info, setInfo] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [infor, setInfor] = useState({
    name: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function addInList() {
    //if (info.password === info.cnf_password) {
    setInfor({
      name: info.name,
      password: info.password,
    });
    let len = DataSet.length;
    var bool = false;
    for (let i = 0; i < len; i++) {
      if (
        DataSet[i].name === infor.name &&
        DataSet[i].password === infor.password
      ) {
        bool = true;
      }
    }
    if (DataSet.includes(infor)) {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
    } else {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <div>
          <h2>User Not Found! Please Sign Up</h2>
          <Register />
        </div>
      );
    }
    // } else {
    //   const root = ReactDOM.createRoot(document.getElementById("root"));
    //   root.render(
    //     <div>
    //       <TryAgain />
    //       <Register />
    //     </div>
    //   );
    // }
  }

  function signup() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div>
        <Register />
      </div>
    );
  }

  return (
    <div>
      <h1>
        <center>Sign In</center>
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
      <button onClick={addInList}>Sign In</button>
      <br />
      <br />
      <br />
      <p>Not Signed UP ? Click here for Sign Up</p>
      <button onClick={signup}>SIGN UP</button>
    </div>
  );
}

export default LogIn;
