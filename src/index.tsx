import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import "./normalize.css";
import "./skeleton.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
