// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Authcontext";
import AuthPage from "./AuthPage";
import ProtectedRoute from "./protectedroute";
import Navbar from "./Navbar";
import Studenthome from "./studenthome";
import AlumniSearch from "./AlumniSearch";
import JobOpportunities from "./JobOpportunities";
import Gallery from "./Gallery";
import EventPage from "./EventPage";
import Alumnihome from "./alumnihome";
import Alumnijobs from "./Alumnijob";
import AlumniNavbar from "./AlumniNavbar";
const App = () => {
  return (
    <AuthProvider  >
      <Router>
        <Routes>
          <Route style={{backgroundImage : 'url(bg.webp)'}}
            path="/"
            element={
              <div  >
                <AuthPage />
              </div>
            }
          />
      <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Navbar />
                <Studenthome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <AlumniNavbar />
                <Alumnihome />
              </ProtectedRoute>
            }
          />
          <Route path="/studenthome" element={<Studenthome />} />
          <Route path="/alumnidetails" element={<AlumniSearch/>} />
          <Route path="/jobs" element={<JobOpportunities/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/events" element={<EventPage/>} />
          <Route path="/alumnijobs" element={<Alumnijobs />} /> 
          <Route path="/alumnihome" element={<Alumnihome />} />
          
        
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
