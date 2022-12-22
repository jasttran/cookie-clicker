import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = ({ isLoggedIn, username, moneyStatus }) => {
  const navigate = useNavigate();
  function logout() {
    navigate('/');
  }

  const loggedIcon = isLoggedIn
    ? <Button className='register' onClick={logout}><PersonIcon/>Logout {username}</Button>
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