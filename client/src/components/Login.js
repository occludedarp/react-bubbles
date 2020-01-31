import React, { useState } from "react";
import axios from 'axios';


const initialItem = {
  username: "",
  password: ""
}

const Login = (props) => {

  const [user, setUser] = useState(initialItem)
  
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(user.username, user.password)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    // axios.post('', user)
    //   .then( res => {
    //     localStorage.setItem('token', res.data.payload);
    //     props.history('/protected')
    //   })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={handleSubmit}>

        <input 
          name="username"
          type="string"
          value={user.username}
          onChange={handleChange}
          placeHolder="username"
        />

        <input 
          name="password"
          type="string"
          value={user.password}
          onChange={handleChange}
          placeHolder="password"
        />

      </form>
    </>
  );
};

export default Login;
