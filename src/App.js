import './App.css';
import React,{useEffect} from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

import { auth } from './firebase';
import {useStateValue} from "./StateProvider";

function App() {

  const[{user},dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is login
        dispatch({
          type:"Set_User",
          user:authUser,
        });
      }
      else{
        // the user id logged out
        dispatch({
          type:"Set_User",
          user:null,
        })

      }
    });
    //Any cleanup operation go in here....
    return ()=>{
      unsubscribe();
    };
 
  },[]);
  
console.log("User Is>>>",user)

  return (
    
    
    <Router>
    <div className="app">

    <Switch>
     

      <Route path="/login">
          <Login />
        </Route>

        
        <Route path="/">
        <Header />
        
        
        
        </Route>
       
    
         </Switch>
    </div>
</Router>  
    
  );
}

export default App;
