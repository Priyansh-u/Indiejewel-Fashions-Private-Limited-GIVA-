import React, { useState } from "react";
// import contacts from "./App.jsx";
import { Link } from "react-router-dom";

function Name() {
  // let next;
  //  for the validity of credentials
  let valid = false;
  //  for the states of the details fill in form
  var [details, setDetails] = useState({ email: "", password: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  //  function to verify on the click action
  function handleSubmit() {
    event.preventDefault();
    localStorage.getItem(Email);
    localStorage.getItem(Password);
    if (Email === details.email && Password === details.password) {
      valid = true;
    }
  }

  return (
    <div className="container">
      <p className="register">Get Started !!</p>
      <input
        onChange={handleChange}
        name="email"
        value={details.email}
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        name="password"
        value={details.password}
        placeholder="Password"
      />
      <button className="button" onClick={handleSubmit}>
        Enjoy Shopping !!
        {/* <Link to="/next" className="anchor" onClick={handleSubmit}>
        Enjoy Shopping !!
      </Link> */}
      </button>
    </div>
  );
}
export default Name;
