import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
           <Header />
           <Menu />
           <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;