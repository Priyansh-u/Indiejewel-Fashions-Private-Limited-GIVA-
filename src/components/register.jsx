import React, { useState } from "react";
import { Link } from "react-router-dom";
var contacts;
function App() {
  // for the credentials states and rendering
  const [contact, setContact] = useState({
    email: "",
    password: ""
  });
  const [confirmpass, setPass] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    contacts = contact;
    localStorage.setItem("Email", contact.email);
    localStorage.setItem("Password", contact.password);
    console.log(contacts);
  }

  function changesdone(event) {
    const { name, value } = event.target;
    setPass(value);
  }

  return (
    <div className="container">
      <p className="register">Register</p>
      <form>
        <input
          onChange={handleChange}
          name="email"
          value={contact.mobile}
          placeholder="Email"
        />
        <p className="otp"> Send OTP</p>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={contact.password}
          placeholder="Password"
        />
        <input
          className="extra"
          type="password"
          onChange={changesdone}
          name="confirmpass"
          value={confirmpass}
          placeholder="Confirm Password"
        />

        <button className="button" onClick={handleSubmit}>
          Sign Up !{/* <Link to="/login" /> */}
          {/* <a href="index2.html"> Sign Up !</a> */}
        </button>
      </form>
    </div>
  );
}

export default App;
