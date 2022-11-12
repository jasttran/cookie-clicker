import "./LoginPage.css"
import PropTypes from 'prop-types';
import { useState } from 'react';

async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const LoginPage = ({setToken}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-page">
      <a href="/" >Go Back</a>
       <div className="container">
        <p className="welcome-header">Welcome<br/>Back!</p>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label> <input type="text" placeholder="Email" onChange={e => setUserName(e.target.value)}/> </label>
            <label> <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/> </label>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <p className="create-account">A Newbie? <a href="/signup" >Create Account</a> </p>
       </div>
       <p className="footer">&#169; 2020 Kooki. All Rights Reserved</p>
    </div>
  )
}


LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginPage
