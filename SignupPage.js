// src/SignupPage.js
import React, { useState } from "react";
import "./AuthPage.css";

const SignupPage = ({ onSwitchToLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    if (password === confirmPassword) {
      alert("Account created successfully!");
      onSwitchToLogin();
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="auth-box">
      <h1>Create an Account</h1>
      <form onSubmit={handleSignupSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={onSwitchToLogin} className="switch-link">Sign in here</span>
      </p>
    </div>
  );
};

export default SignupPage;
