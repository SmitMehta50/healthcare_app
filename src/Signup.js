import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';
import Alert from '@mui/material/Alert';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/home')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const err = () =>{
    if(error === 'Firebase: Error (auth/invalid-email).'){
        return(
          <Alert severity="error">Invalid Email Address</Alert>
        )
    }
    if(error === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
      return(
        <Alert severity="error">Password should be at least 6 characters long</Alert>
      )
      
    }
    if(error === 'Firebase: Error (auth/email-already-in-use).'){
        return(
          <Alert severity="error">Email already in use SignIn</Alert>
        )
        
      }
}

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
          {err()}
        <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
        <p className='py-2'>
          Already have an account yet?{' '}
          <Link to='/' className='underline'>
            Sign in.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='border p-3'
            type='email'
            required
            autoComplete='on'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='border p-3'
            type='password'
            required
            autoComplete='on'
          />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;