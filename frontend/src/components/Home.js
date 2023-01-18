import axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3003")
      .then((data) => {
        setError("Logged In");
        setUsers(data);
      })
      .catch((err) => {
        setError("Not Logged In");
      });

    return () => {};
  }, []);

  return (
    <div className="home">
      <h1>{error}</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
