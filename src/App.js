import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import Register from "./Auth/Register";
import Login from "./Auth/Login";

import "./app.css"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="others">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
