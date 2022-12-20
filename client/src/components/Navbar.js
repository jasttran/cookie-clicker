import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import { Link, renderMatches } from 'react-router-dom';

const Navbar = ({ isLoggedIn, user }) => {
  const loggedIcon = isLoggedIn
    ? <Link to="/auth/logout" className='register'><PersonIcon/>Logout</Link>
    : <Link to="/auth/register" className='register'><PersonIcon/>Register</Link>;

  return (
    <nav className="navbar">
      <Link to="/" className='kookie'>Kooki</Link>
      <ul>
        <Link to="/about" className='about' ><InfoIcon />About</Link>
        {loggedIcon}
      </ul>
    </nav>
  );
}

export default Navbar