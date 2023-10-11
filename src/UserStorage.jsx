import React from 'react'
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export function UserStorage({children}) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const {url, options} = USER_GET(token)
    const responseUser = await fetch(url, options);
    const json = await responseUser.json()
    
    setData(json);
    setLogin(true);
    console.log(json)
  }

  async function userLogin(username, password) {
    const {url, options} = TOKEN_POST({username, password})
    const responseToken = await fetch(url, options);
    const {token} = await responseToken.json();

    window.localStorage.setItem('token', token)
    getUser(token)
  }

  return (
    <UserContext.Provider value={{userLogin, data}}>
      {children}
    </UserContext.Provider>
  )
}
