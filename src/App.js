import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import FeedPage from "./pages/feedPage";
import CheckInPage from "./pages/checkInPage";
import "./App.css";
import ProtectedRoute from "./components/HOC/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log('Fetch token from storage', {token})
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/feed/:eventId" element={<ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading} > <FeedPage /> </ProtectedRoute>} />
        {/* <Route path="/feed/:eventId" element={<FeedPage />} /> */}
        <Route path="/checkin" element={<CheckInPage />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
