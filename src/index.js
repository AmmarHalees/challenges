import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App.jsx';
import  "./assets/css/globals.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
