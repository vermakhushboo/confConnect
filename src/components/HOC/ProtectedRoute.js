import React from 'react';
import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ isAuthenticated }) => {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
// };

const ProtectedRoute = ({ isAuthenticated, isLoading, children }) => {
    console.log({isAuthenticated, children, isLoading})
    if (isLoading) {
        return <div>Loading...</div>; // or any loading indicator you prefer
    }
    if(!isAuthenticated) {
      return (
        <Navigate to="/" replace/>
      );
    }
  
    return children;
  }
export default ProtectedRoute;
