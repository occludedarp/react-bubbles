import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username: ' ', password: ' '})

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
  }

  const handleChanges = (e) => {
    setCredentials({...credentials,
      [e.target.name] : e.target.value
    })
  } 

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
