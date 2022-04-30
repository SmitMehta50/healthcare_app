import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

function Logout() {
    const { logout } = UserAuth();
    const navigate = useNavigate();
        try {
          logout();
          navigate('/');
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message);
        }


  return (
    <div>

    </div>
  )
}

export default Logout