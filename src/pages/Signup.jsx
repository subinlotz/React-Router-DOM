import React from 'react'
import "./Signup.css"
import { Link } from 'react-router'

function Signup() {
  return (
    <div id='wrapper'>
      <div id='wrapper3'>
      <div id='texts'>
        <h1>Signup</h1>
        <h2>to get started</h2>
      </div>
      <div id='input-box'>
        <input type="text" placeholder='Enter your username' />
        <input type="email" name="" id="" placeholder='Enter your email' />
        <input type="password" name="" id="" placeholder='Enter your password' />
        <input type="password" name="" id="" placeholder='Confirm your password' />
      </div>
      <div id='button'>
        <button>Signup</button>
      </div>
      <div id='signup-area'>
        <span>Already account?</span>Login
        
      </div>
      </div>
    </div>
  )
}

export default Signup
