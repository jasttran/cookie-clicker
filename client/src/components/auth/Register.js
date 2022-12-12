import axios from 'axios';
import './Register.css'

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      axios.post('http://localhost:3001/auth/register', {
        email: email,
        password: password
      }).then(response => {
        console.log(response);
      });
    } catch(e) {
      console.log(e);
    }

  }
  return (
    <div className="register-page">
      <a href="/" >Go Back</a>
       <div className="register-container">
        <p className="register-header">Sign Up</p>
        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <label> <input type="text" placeholder="Enter Your Email" name="email"/> </label>
            <label> <input type="password" placeholder="Create a Password" name="password"/> </label>
            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        <p className="login-footer">Already a Member? <a href="/auth/login" >Login</a> </p>
       </div>
       <p className="footer">&#169; 2020 Kooki. All Rights Reserved</p>
    </div>
  )
}

export default Register;
