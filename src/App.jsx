import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Registration from "./Pages/Registration";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
