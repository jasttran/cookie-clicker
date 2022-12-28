import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, username, moneyStatus }) => {
  const loggedIcon = isLoggedIn
    ? <Link to="/" className='register'><PersonIcon/>Logout {username}</Link>
    : <Link to="/auth/register" className='register'><PersonIcon/>Register</Link>;
  
  return (
    <nav className="navbar">
      <Link to="/" className='kookie'>Kooki</Link>
      <ul>
        <Link to="/about" state={{ isLoggedIn: isLoggedIn, username: username, moneyStatus: moneyStatus }} className='about' ><InfoIcon />About</Link>
        {loggedIcon}
      </ul>
    </nav>
  );
}

export default Navbar