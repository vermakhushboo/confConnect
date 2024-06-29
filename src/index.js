import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// // Catch unhandled promise rejections
// window.addEventListener('unhandledrejection', event => {
//   console.error('Unhandled promise rejection:', event.promise, 'reason:', event.reason);
//   // Handle the error and optionally show a fallback UI
// });

// // Catch runtime errors
// window.addEventListener('error', event => {
//   console.error('Runtime error:', event.error);
//   // Handle the error and optionally show a fallback UI
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
