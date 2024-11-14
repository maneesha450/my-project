// src/LoginPage.js
import React, { useState } from "react";
import "./AuthPage.css";

const LoginPage = ({ role, onSwitchToSignup, onLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(id, password, role);
  };

  return (
    <div className="auth-box">
      <h1>{role} Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder={`${role} ID`}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span onClick={onSwitchToSignup} className="switch-link">Sign up here</span>
      </p>
    </div>
  );
};

export default LoginPage;
