import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username: ' ', password: ' '})
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
      window.localStorage.setItem('token', res.data)
      history.push('/bubble-page')
    })
    .catch(err => console.log(err))
  }

  const handleChanges = (e) => {
    setCredentials({...credentials,
      [e.target.name] : e.target.value
    })
  } 

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={credentials.username}
          type="text"
          placeholder="username"
          onChange={handleChanges}
        />
        <input 
          name="password"
          value={credentials.password}
          type="password"
          placeholder="password"
          onChange={handleChanges}
        />
        <button type="submit">log-in</button>
      </form>
    </>
  );
};

export default Login;
