import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate()
  const [loginMsg, setLogin] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailOrUsername = event.target.email.value;
    const password = event.target.password.value;

    axios.post(`${process.env.REACT_APP_URL}/auth/login`, {
      emailOrUsername: emailOrUsername,
      password: password,
    }).then(response => {
      const savedData = response.data.success;
      const username = response.data.username;
      navigate('/loggedIn', {state: { 
        moneyStatus: savedData,
        username: username,
      }})
    }).catch(error => {
      setLogin(error.response.data.error)
      console.log(error.response.data.error);
    });
  }


  return (
    <div className="login-page">
      <Link to="/" >Go Back</Link>
       <div className="login-container">
        <p className="welcome-header">Welcome<br/>Back!</p>
        
        { <p style ={{
          color: 'grey',
          padding: 1,
          fontStyle: 'italic'
        }}> {loginMsg}</p>}

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label> <input type="text" placeholder="Enter Email or Username" name=
            "email"/> </label>
            <label> <input type="password" placeholder="Enter Password" name="password"/> </label>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        < br/>
        <p className="create-account">A Newbie? <Link to="/auth/register" >Create Account</Link> </p>
       </div>
       <p className="footer">&#169; 2020 Kooki. All Rights Reserved</p>
    </div>
  )
}

export default Login
