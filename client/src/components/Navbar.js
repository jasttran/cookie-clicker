import './Navbar.css'

import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = ({money}) => {
  return (
    <nav className="navbar">
      <a href="/" className='kookie'>Kooki</a>
      <ul>
        <a href="/about" className='about'><InfoIcon />About</a>
        <a href="/auth/login" className='login'><PersonIcon/>Login</a>
      </ul>
    </nav>
  )
}

export default Navbar
