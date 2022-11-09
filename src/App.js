import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./components/Homescreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
