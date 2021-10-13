import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
          alt=""
        />
        <h1>Sign in to Slack Clone App</h1>
        <p>Tutorial</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
