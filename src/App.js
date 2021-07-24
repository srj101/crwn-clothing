import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage.component';
import ShopPage from './Components/Pages/Shop/shop.component';
import Header from './Components/Header/header.component';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
      </Switch>
    </div>  
  )
}

export default App;
