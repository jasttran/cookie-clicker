import phase1 from '../../images/phase/phase1.png'
import phase2 from '../../images/phase/phase2.png'
import phase3 from '../../images/phase/phase3.png'
import phase4 from '../../images/phase/phase4.png'
import phase5 from '../../images/phase/phase5.png'
import phase6 from '../../images/phase/phase6.png'
import phase7 from '../../images/phase/phase7.png'
import login1 from '../../images/loginPhases/login1.png'
import login2 from '../../images/loginPhases/login2.png'
import login3 from '../../images/loginPhases/login3.png'
import login4 from '../../images/loginPhases/login4.png'
import './AboutPage.css'
import { Link, useLocation } from 'react-router-dom'

const AboutPage = () => {
  const location = useLocation();
  const isLoggedIn = location.state.isLoggedIn;
  const username = location.state.username;
  const moneyStatus = location.state.moneyStatus;
  const goBack = isLoggedIn
    ? <Link to="/loggedIn" state={{username: username, moneyStatus: moneyStatus}}>Go Back</Link>
    : <Link to="/">Go Back</Link>

  return (
    <div>
      <div className='description'>
        {goBack}
        <p>Please appreciate CookieClicker's glowup</p>
      </div>
      <div className='phases'>
        <img draggable={false} src={phase1} />
        <img draggable={false} src={phase2} />
        <img draggable={false} src={phase3} />
        <img draggable={false} src={phase4} />
        <img draggable={false} src={phase5} />
        <img draggable={false} src={phase6} />
        <img draggable={false} src={phase7} />
        <img draggable={false} src={login1} />
        <img draggable={false} src={login2} />
        <img draggable={false} src={login3} />
        <img draggable={false} src={login4} />
      </div>
    </div>
  )
}

export default AboutPage
