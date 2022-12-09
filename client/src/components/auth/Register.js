import './Register.css'

const Register = () => {
  return (
    <div className="register-page">
      <a href="/" >Go Back</a>
       <div className="register-container">
        <p className="register-header">Sign Up</p>
        <div className="register-form">
          <form>
            <label> <input type="text" placeholder="Enter Your Email"/> </label>
            <label> <input type="password" placeholder="Create a Password"/> </label>
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
