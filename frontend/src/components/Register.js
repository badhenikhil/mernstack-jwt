import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
const apiUrl = "http://localhost:3003";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = () => {
    axios
      .post(`${apiUrl}/register`, { email, password })
      .then((user) => {
        navigate("/login");
        setError("");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <label>Username</label>
      <input
        type="text"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label>password</label>
      <input
        type="text"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <label className="error">{error}</label>
      <br />
      <button onClick={register}> Register</button>
    </div>
  );
}

export default Register;
