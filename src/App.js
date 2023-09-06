import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './components/Nav';


const App = () => {
  return (
    <div className="App">
      <Router>
      <Nav />
      </Router>
  </div>
  )
}

export default App