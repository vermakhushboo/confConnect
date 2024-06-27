import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import FeedPage from "./pages/feedPage";
import CheckInPage from "./pages/checkInPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/feed/:eventId" element={<FeedPage />} />
        <Route path="/checkin" element={<CheckInPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
