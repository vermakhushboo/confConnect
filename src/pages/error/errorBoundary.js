// src/components/ErrorBoundary.js
import React, { Component } from 'react';
import ErrorFallback from './errorFallback';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    console.log({state: this.state})
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error boundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render the custom fallback UI
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
