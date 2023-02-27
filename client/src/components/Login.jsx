import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthConsumer from '../hooks/useAuth'
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {

  const navigate = useNavigate();
  const {login} = AuthConsumer();
  const {state} = useLocation();

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/");
    });
  };

  return (

    <>
        <a
          className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </a>
    </>
    
  );
};

export default Login