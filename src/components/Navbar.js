import './Navbar.css'

import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className='kookie'>Kooki</a>
      <ul>
        <a href="/about" className='about'><InfoIcon />About</a>
        <a href="/login" className='login'><PersonIcon/> <span>Login</span></a>
      </ul>
    </nav>
  )
}

export default Navbar
