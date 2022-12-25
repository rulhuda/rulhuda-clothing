import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;  


  const onResetHandler = () => {
    setFormFields(defaultFormFields);
  }
  
  const onHandleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      const response = await createUserDocumentFromAuth(user, { displayName });
      
      if (response) {
        alert('Sign Up Success!');
      }
      onResetHandler();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use!');
      } else {
        console.log('user creation encounteren an error', error);
      }
    }
    
  }
  
  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={onHandleSubmit} onReset={onResetHandler}>

        <FormInput
          label='Display Name'
          inputOptions = {{
            type: 'text',
            required: true,
            onChange: onHandleChange,
            name: 'displayName',
            value: displayName,
          }}
          />

        <FormInput
          label='Email'
          inputOptions = {{
            type: 'email',
            required: true,
            onChange: onHandleChange,
            name: 'email',
            value: email,
          }}
        />

        <FormInput
          label='Password'
          inputOptions = {{
            type: 'password',
            required: true,
            onChange: onHandleChange,
            name: 'password',
            value: password,
          }}
        />
        
        <FormInput
          label='Confirm Password'
          inputOptions = {{
            type: 'password',
            required: true,
            onChange: onHandleChange,
            name: 'confirmPassword',
            value: confirmPassword,
          }}
        />
        
        <div className="buttons-container">
          <Button type="submit">Sign Up</Button>
          <Button buttonType='inverted' type="reset">Reset</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;