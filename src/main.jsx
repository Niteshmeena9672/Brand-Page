// Import necessary dependencies
import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library
import App from './App.jsx'; // Import the main application component
import './index.css'; // Import the CSS file for styling

// Use ReactDOM's createRoot function to render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode for development mode checks and warnings
  <React.StrictMode>
    {/* Render the main application component */}
    <App />
  </React.StrictMode>,
);
