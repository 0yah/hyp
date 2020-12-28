import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from './components/Home'
import { Cart } from './components/Cart';
import { navigation } from './components/navigation';
import {Details} from './components/Details';

function App() {
  return (
    <Router>
      {navigation()}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/info/:id" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
