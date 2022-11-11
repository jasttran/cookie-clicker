import "./LoginPage.css"
import ChocChip from "../images/choc-chip.png"

const LoginPage = () => {
  return (
    <div className="page">
       <div className="container">
        <p className="login-header"><img className='cookie-img' draggable={false} src={ChocChip} />Login</p>
       </div>
    </div>
  )
}

export default LoginPage
