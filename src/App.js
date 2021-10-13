
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Chat from './Chat';
import { useEffect, useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { actionTypes } from './reducer';

function App() {
  const[{user},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
  
        const data = {
            user: user,
        }

        dispatch({
          type:actionTypes.SET_USER,
            user:data.user
        });


    })
    
}, [user])

  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ):(
          <>
          <div className="header"> <Header/></div>
         
      <div className="app_body">
        <Sidebar/>
          
        <Switch>  
          <Route path="/room/:roomId">
              <Chat/>
          </Route>
          <Route path="/">

          </Route>

        </Switch>
        {/* sidebar */}
      {/* react router -> chat screen */}
      </div>
          </>
        )}
      
      </Router>
    </div>
  );
}

export default App;
