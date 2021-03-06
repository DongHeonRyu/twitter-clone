import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { authService, firebaseInstance } from "../fbase";
import "./route.css"

const Auth = () => {

  const onSocialClick = async (event) => {
    const { target: { name } } = event;

    let provider;

    if (name === "google") {

      provider = new firebaseInstance.auth.GoogleAuthProvider();

    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    const data = await authService.signInWithPopup(provider);
  

  }

  return (
    <div>
      <AuthForm/>
      <div className="ThridSignIn">
        <button className="btn btn-outline-secondary" name="google" onClick={onSocialClick}>Continue with Google</button>
        <button className="btn btn-outline-secondary" name="github" onClick={onSocialClick}>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
