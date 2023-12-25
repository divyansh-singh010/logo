import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Feedback from "./pages/forms/feedback";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
      {/* Footer starts */}
      <div className="footer">
        <ul className="footer-list">
          <li className="footer-list-item">Mail</li>
          <li className="footer-list-item">Legal</li>
          <li className="footer-list-item">Forms</li>
          <li className="footer-list-item">Contact</li>
        </ul>
      </div>
      {/* Footer ends */}
    </Router>
  );
};

export default App;
