import React from 'react'
import { Link } from 'react-router'
import './Login.css'

function Login() {
  return (
    <div id='wrapper'>
      <div id='wrapper2'>
      <div id='texts'>
        <h1>Login</h1>
        <h2>to get started</h2>
      </div>
      <div id='input-box'>
        <input type="email" name="" id="" placeholder='Enter your email' />
        <input type="password" name="" id="" placeholder='Enter your password' />
      </div>
      <div>
        Forgot Password?
      </div>
      <div id='button'>
        <button>Continue</button>
      </div>
      <div id='signup-area'>
        <span>New user?</span>
        Register
      </div>
      </div>
    </div>
  )
}

export default Login
