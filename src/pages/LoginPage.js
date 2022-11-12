import "./LoginPage.css"
import ChocChip from "../images/choc-chip.png"

const LoginPage = () => {
  return (
    <div className="login-page">
      <a href="/" >Go Back</a>
       <div className="container">
        <p className="welcome-header">Welcome<br/>Back!</p>
        <div className="login-form">
          <form>
            <label> <input type="text" placeholder="Email"/> </label>
            <label> <input type="password" placeholder="Password"/> </label>
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

export default LoginPage
