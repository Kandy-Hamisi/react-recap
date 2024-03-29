import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={ <App /> } />
    </Routes>
  </Router>,
  document.getElementById('root')
);
