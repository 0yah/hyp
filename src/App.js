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
import { HeaderNav } from './components/navigation';
import {Details} from './components/Details';
import { Products } from './components/Products';
import { footer } from './components/footer';
import { CheckOut } from './components/CheckOut';
import {Test} from './components/test';
import { UpdateProduct } from './components/UpdateProduct';
import { AddProduct } from './components/AddProduct';


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
      {HeaderNav()}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/:id" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/checkout" component={CheckOut}/>
        <Route exact path="/add" component={AddProduct}/>
        <Route exact path="/update/:id" component={UpdateProduct}/>
        <Route component={Test}/>
  
      </Switch>
      {footer()}
    </Router>
  );
}

export default App;
