import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Miami from './components/miami.js';
import Orlando from './components/orlando.js';
import Tampa from './components/tampa.js';


function App() {
  return (
    <Router>
      <Orlando />
      <Tampa />
      <Miami />
    </Router>
  );
}

export default App;
