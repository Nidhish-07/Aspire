import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import AuthConsumer from '../hooks/useAuth'


const RequireAuth = ({children}) => {

  const {authed} = AuthConsumer();
  const location = useLocation();

  return authed === true ? children : <Navigate to="/signin" replace state={{path: location.pathname}}/>
}

export default RequireAuth