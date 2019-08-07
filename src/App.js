import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component.jsx'
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

const HatsPage = () =>
(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (    
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop/' component={ShopPage}></Route>
        <Route path='/signin/' component={SignInAndSignOut}></Route>
      </Switch>    
    </div>
  );
}

export default App;
