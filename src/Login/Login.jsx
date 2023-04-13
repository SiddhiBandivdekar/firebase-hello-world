import React from "react";
import "./Login.css";
import { auth, googleAuthProvider } from "../firebase";

const Login = () => {
  const handleSignIn = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Login;
