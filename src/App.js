import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import {messaging,publicFCMkey} from './firebase';
import {loadToken,tokenSent,usePersistedReducer,contentReducer,initialContentState} from './reducer';
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
import { Products } from './components/Products';
import { footer } from './components/footer';
import { CheckOut } from './components/CheckOut';



function App() {

  const [persistedState, dispatch] = usePersistedReducer(contentReducer, initialContentState);
  
  const requestNotificationPermission =()=>{
    messaging.getToken({
      vapidKey:publicFCMkey
      }).then((currentToken)=>{

        if(currentToken){
          dispatch(loadToken(currentToken));
          dispatch(tokenSent(true));
          console.log(currentToken);
        }else{
          dispatch(tokenSent(false));
        }

      }).catch((error)=> {

        dispatch(tokenSent(false));
         
      });
  }

  messaging.onMessage((payload)=>{
    console.log(payload);
  });

  useEffect(() => {

    if(!persistedState.tokenSent){
      requestNotificationPermission();
    }
    console.log(persistedState);



  }, []);




  return (
    <Router>
      {navigation()}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/:id" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/checkout" component={CheckOut}/>
  
      </Switch>
      {footer()}
    </Router>
  );
}

export default App;
