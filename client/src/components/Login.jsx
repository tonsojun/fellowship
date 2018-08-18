import React from 'react';


const Login = ({handleChange, onSubmit, viewChange}) => (
  <div>
    <h4>Login</h4>
    <form >
    <p onClick={()=> viewChange('/signup')}>Sign Up</p>
    <label htmlFor="display-name"> Name: </label>
    <input onChange={handleChange} type="text" id="display-name" name="username"  required />
    <label htmlFor="display-password"> Password:</label>
    <span>
    <input onChange={handleChange} type="password" name="password" autoComplete="off" required/>
    
    </span>    
    <button onClick={onSubmit} name="submit" type="button" value="submit-true">
    Submit
    </button>
    </form>
  </div>
)

export default Login;