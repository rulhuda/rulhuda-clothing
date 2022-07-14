import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={onHandleSubmit} onReset={onResetHandler}>
        <label>Display Name</label>
        <input 
          type='text' 
          name="displayName" 
          value={displayName}
          onChange={onHandleChange} 
          required 
        />
        
        <label>Email</label>
        <input 
          type='email'
          name='email'
          value={email}
          onChange={onHandleChange}
          required 
        />

        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={password}
          onChange={onHandleChange}
          required
        />
        
        <label>Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onHandleChange}
          required
        />

        <button type="submit">Sign Up</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default SignUpForm;