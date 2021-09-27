import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
           <Header />
           <Menu />
      </div>
    </Router>
  );
}

export default App;