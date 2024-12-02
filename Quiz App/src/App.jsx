import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Question from "./components/Question";

const App = () => {
  return (
    <Router basename="/React-Quiz-App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:category" element={<Question />} />
      </Routes>
    </Router>
  );
};

export default App;
