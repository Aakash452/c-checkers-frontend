import React, { useState } from "react";
import "../styles/Login.css"; // Place the CSS below into this file
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Admin_Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [psw, setPsw] = useState("");

  const fetchAdminLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin-login", {
        method: "POST", // Changed to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: psw,
        }),
      });

      if (!response.ok) {
        Swal.fire({
          title: "Error!",
          text: "Invalid Credentials",
          icon: "error",
          confirmButtonText: "Try Again",
        });

        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        // Parse the response body as JSON
        const data = await response.json();
        const token = data.token;
        const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        const isExpired = Date.now() >= decoded.exp * 1000; // exp is in seconds

        localStorage.setItem("jwtToken", token);
        navigate("/admin/Dashboard");
      }
    } catch (error) {
      console.error("Error fetching admin login data:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          value={userName}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {
            setPsw(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={psw}
          required
        />

        <button onClick={fetchAdminLogin} type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default Admin_Login;
