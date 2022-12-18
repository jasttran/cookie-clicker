import axios from 'axios';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const moneyData = JSON.parse(localStorage.getItem('KOOKI_MONEY_STATUS'));
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const moneyStatus = event.target.saveCurrStatus.checked ? moneyData : 0;

    try {
      axios.post(`${process.env.REACT_APP_URL}/auth/register`, {
        email: email,
        password: password,
        moneyStatus: moneyStatus
      }).then(response => {
        console.log(response);
        navigate('/')
      });
    } catch(e) {
      console.log(e);
    }

  }
  return (
    <div className="register-page">
      <Link to="/" >Go Back</Link>
       <div className="register-container">
        <p className="register-header">Sign Up</p>
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <label> <input type="email" placeholder="Enter Your Email" name="email"/> </label>
            <label> <input type="password" placeholder="Create a Password" name="password"/> </label>
            <br />
            <label> <input type="checkbox" name="saveCurrStatus"className="inputCheckbox" /> Save Current Status? </label>
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
