import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './Components/pages/About';
import Menu from './Components/pages/Menu';
import OrderHere from './Components/pages/OrderHere';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/menu' component={Menu} />
          <Route path='/order-here' component={OrderHere} />
        </Switch>
      </Router>
    </>
  );
}

export default App;