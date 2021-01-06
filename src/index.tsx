import React from 'react';
import ReactDOM from 'react-dom';
import { Front } from './front';

import "./normalize.css";
import "./skeleton.css";

ReactDOM.render(
  <React.StrictMode>
    <Front />
  </React.StrictMode>,
  document.getElementById('root')
);
