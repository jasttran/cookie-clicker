import phase1 from '../images/phase/phase1.png'
import phase2 from '../images/phase/phase2.png'
import phase3 from '../images/phase/phase3.png'
import phase4 from '../images/phase/phase4.png'
import phase5 from '../images/phase/phase5.png'
import phase6 from '../images/phase/phase6.png'
import phase7 from '../images/phase/phase7.png'
import login1 from '../images/loginPhases/login1.png'
import login2 from '../images/loginPhases/login2.png'
import login3 from '../images/loginPhases/login3.png'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div>
      <div className='description'>
        <a href="/" >Go Back</a>
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
      </div>
    </div>
  )
}

export default AboutPage
