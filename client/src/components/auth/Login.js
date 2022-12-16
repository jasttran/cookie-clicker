import "./Login.css";
import axios from "axios";

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) return;

    try {
      axios.post(`${process.env.URL}/auth/login`, {
        email: email,
        password: password,
      }).then(response => {
        console.log(response);
      });
    } catch(e) {
      console.log(e);
    }

  }

  return (
    <div className="login-page">
      <a href="/" >Go Back</a>
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
        <p className="create-account">A Newbie? <a href="/auth/register" >Create Account</a> </p>
       </div>
       <p className="footer">&#169; 2020 Kooki. All Rights Reserved</p>
    </div>
  )
}

export default Login
