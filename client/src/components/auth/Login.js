import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) return;

    try {
      axios.post(`${process.env.REACT_APP_URL}/auth/login`, {
        email: email,
        password: password,
      }).then(response => {
        const savedData = response.data.success;
        navigate('/', {state: { 
          moneyStatus: savedData,
          fromLogin: true,
        }})
      });
    } catch(e) {
      console.log(e);
    }
  }


  return (
    <div className="login-page">
      <Link to="/" >Go Back</Link>
       <div className="login-container">
        <p className="welcome-header">Welcome<br/>Back!</p>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label> <input type="text" placeholder="Enter Email" name=
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
