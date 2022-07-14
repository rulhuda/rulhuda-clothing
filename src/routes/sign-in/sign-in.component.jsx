import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth
} 
from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const getResponse = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getResponse();
  })

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  const logGoogleRedirectUser = async () => {
    const {user} = await signInWithGoogleRedirect();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
    </div>
  )
};

export default SignIn;
