import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
