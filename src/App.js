import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import FeedPage from "./pages/feedPage";
import CheckInPage from "./pages/checkInPage";
import "./App.css";
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import NotFound from "./pages/notfound/notfound";
import ErrorBoundary from "./pages/error/errorBoundary";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <Router>
      {/* TODO figure out ErrorBoundary. Not working as expected */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/feed/:eventId" element={<ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading} > <FeedPage /> </ProtectedRoute>} />
          {/* <Route path="/feed/:eventId" element={<FeedPage />} /> */}
          <Route path="/event/:eventId/checkin" element={<ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading} > <CheckInPage /> </ProtectedRoute>} />
          {/* Add other routes here as needed */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
