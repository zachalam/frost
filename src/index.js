import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import App from './components/structure/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'));

registerServiceWorker();
