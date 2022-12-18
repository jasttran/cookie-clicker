import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const Navbar = ({money}) => {
  return (
    <nav className="navbar">
      <Link to="/" className='kookie'>Kooki</Link>
      <ul>
        <Link to="/about" className='about'><InfoIcon />About</Link>
        <Link to="/auth/register" className='register' state={{ currMoneyStatus: money }}><PersonIcon/>Register</Link>
      </ul>
    </nav>
  )
}

export default Navbar
