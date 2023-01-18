import "./App.css";
import Register from "./components/Register";
import { Routes, NavLink, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" className="navbar-brand">
          Home
        </NavLink>
        <br />
        <NavLink to="/register">Register</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
