import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';
import Alert from '@mui/material/Alert';
import axios from 'axios'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

   React.useEffect(()=>{

        axios.get('https://kidneydisease-api.herokuapp.com/kidney')
        .then(function(response){
          console.log(response)
        }).catch((error)=>console.log(error));

        axios.get('https://diabetessapi.herokuapp.com/diabetes')
        .then(function(response){
          console.log(response)
        }).catch((error)=>console.log(error));

        axios.get('https://diabetessapi.herokuapp.com/generalprediction')
        .then(function(response){
          console.log(response)
        }).catch((error)=>console.log(error));

        axios.get('https://diabetessapi.herokuapp.com/heart')
        .then(function(response){
          console.log(response)
        }).catch((error)=>console.log(error));

        axios.get('https://pneumonia-apis.herokuapp.com/')
        .then(function(response){
          console.log(response)
        }).catch((error)=>console.log(error));

        axios.get('https://kidneydisease-api.herokuapp.com/liver')
        .then(function(response){
          console.log(response)
        }).catch((error)=>console.log(error));

        axios.get('https://kidneydisease-api.herokuapp.com/hospitaldata')
        .then(function(response){
          console.log(response)
        }).catch((error)=>console.log(error));

    },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/home')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  const err = () =>{
      if(error === 'Firebase: Error (auth/wrong-password).'){
          return(
            <Alert severity="error">Wrong Password</Alert>
          )
      }
      if(error === 'Firebase: Error (auth/user-not-found).'){
        return(
          <Alert severity="error">User Not Found</Alert>
        )
    }

  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
          {err()}
        <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
        <p className='py-2'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' autoComplete='on' required />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' autoComplete='on' required />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;