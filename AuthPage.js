// src/AuthPage.js
import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const dummyUsers = [
  { id: "admin1", password: "admin123", role: "Admin" },
  { id: "student1", password: "student123", role: "Student" },
  { id: "alumni1", password: "alumni123", role: "Alumni" }
];

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleLogin = (id, password, role) => {
    const user = dummyUsers.find(
      (u) => u.id === id && u.password === password && u.role === role
    );

    if (user) {
      alert(`Welcome, ${user.role}!`);
      if(role === "Student"){
      navigate(`/studenthome`);}
    else if (role === "Alumni") {
      navigate(`/alumnihome`);
    }
  }
     else {
      alert("Invalid credentials");
    }
  };

  const handleSwitchToSignup = () => {
    setIsLoginView(false);
  };

  const handleSwitchToLogin = () => {
    setIsLoginView(true);
  };

  return (
    <div
      className="auth-page"
    >
      <div className="role-selector" style={{ marginTop: "200px" }}>
        <button onClick={() => setRole("Admin")}>Admin</button>
        <button onClick={() => setRole("Student")}>Student</button>
        <button onClick={() => setRole("Alumni")}>Alumni</button>
      </div>
      {isLoginView ? (
        <LoginPage role={role} onSwitchToSignup={handleSwitchToSignup} onLogin={handleLogin} />
      ) : (
        <SignupPage onSwitchToLogin={handleSwitchToLogin} />
      )}
    </div>
  );
};

export default AuthPage;
