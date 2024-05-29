import React from "react";
import ReactDOM, { render } from "react-dom/client";
import App from "./AppComponents/App";
import RegApp from "./RegistrationApp/RegApp";

//ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RegApp />);
