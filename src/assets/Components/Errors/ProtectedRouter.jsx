import React from 'react'
import { UserContext } from '../../../UserStorage'
import { Navigate } from 'react-router-dom';

function ProtectedRouter({children}) {
  const {login} = React.useContext(UserContext);

  return login ===true ? children : (login === false) ?  <Navigate to='/login' /> : <></>;
}

export default ProtectedRouter