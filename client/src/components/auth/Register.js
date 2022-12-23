import axios from 'axios';
import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Register = () => {
  const moneyData = JSON.parse(localStorage.getItem('KOOKI_MONEY_STATUS'));
  const [registerMsg, setRegister] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    let moneyStatus = 0;

    if (event.target.saveCurrStatus.checked && moneyData !== null) {
      moneyStatus = moneyData;
    }

    axios.post(`${process.env.REACT_APP_URL}/auth/register`, {
      username: username,
      email: email,
      password: password,
      moneyStatus: moneyStatus
    }).then(response => {
      setRegister(response.data.success)
      console.log(response.data.success);
    }).catch(error => {
      setRegister(error.response.data.error)
      console.log(error.response.data.error);
    });

  }
  return (
    <div className="register-page">
      <Link to="/" >Go Back</Link>
       <div className="register-container">
        <p className="register-header">Sign Up</p>
        { <p style ={{
          color: 'grey',
          padding: 1,
          fontStyle: 'italic'
        }}> {registerMsg}</p>}
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <label> <input type="text" placeholder="Create a Username" name="username"/> </label>
            <label> <input type="email" placeholder="Enter Your Email" name="email"/> </label>
            <label> <input type="password" placeholder="Create a Password" name="password"/> </label>
            <br />
            <label> <input type="checkbox" name="saveCurrStatus" className="inputCheckbox" /> Save Current Status? </label>
            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        <p className="login-footer">Already a Member? <Link to="/auth/login">Login</Link> </p>
       </div>
       <p className="footer">&#169; 2020 Kooki. All Rights Reserved</p>
    </div>
  )
}

export default Register;
