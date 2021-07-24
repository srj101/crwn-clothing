import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage.component';
import ShopPage from './Components/Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInSignUp from './Components/Pages/Sign-In-Sign-Up/Sign-In-Sign-Up.component';
import {auth} from './Firebase/firebase.util';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
   unsubscribeFromAuth = null
  
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user });
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  
  render(){
    return (
      <div className="container">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/signin' component={ SignInSignUp } />
        </Switch>
      </div>  
    )
  }
}

export default App;
