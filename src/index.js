// This file serves as the entry point of the React application.
// It renders the App component into the root div of the index.html file.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);