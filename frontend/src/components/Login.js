import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    axios
      .post("http://localhost:3003/login", { email, password })
      .then((data) => {
        setError("");
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data?.message || err.message);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
      <button onClick={login}> Login</button>
    </div>
  );
}

export default Login;
