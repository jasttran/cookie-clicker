import './SignupPage.css'

const SignupPage = () => {
  return (
    <div className="signup-page">
      <a href="/" >Go Back</a>
       <div className="container">
        <p className="signup-header">Sign Up</p>
        <div className="signup-form">
          <form>
            <label> <input type="text" placeholder="Enter Your Email"/> </label>
            <label> <input type="password" placeholder="Create a Password"/> </label>
            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        <p className="login-footer">Already a Member? <a href="/signup" >Login</a> </p>
       </div>
       <p className="footer">&#169; 2020 Kooki. All Rights Reserved</p>
    </div>
  )
}

export default SignupPage
