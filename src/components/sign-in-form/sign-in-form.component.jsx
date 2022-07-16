import { useState, useContext } from "react";

import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss';
import { UserContext } from "../../context/user.context";


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogleAccount = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);

  }

  const onResetHandler = () => {
    setFormFields(defaultFormFields);
  }
  
  const onHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);

      console.log(user);
      setCurrentUser(user);

      if (user) {
        console.log('Login Success!');
      }
      
      onResetHandler();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email!')
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break;
        default:
          console.log(error);
          break;
      }
    }
    
  }
  
  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={onHandleSubmit}>

        <FormInput
          label='Email'
          inputOptions = {{
            type: 'email',
            onChange: onHandleChange,
            name: 'email',
            value: email,
          }}
        />

        <FormInput
          label='Password'
          inputOptions = {{
            type: 'password',
            onChange: onHandleChange,
            name: 'password',
            value: password,
          }}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogleAccount}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;