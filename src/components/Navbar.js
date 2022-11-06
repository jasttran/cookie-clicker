import './Navbar.css'

import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className='kookie'>Kooki</a>
      <ul>
        <li> <InfoIcon />About</li>
        <li> <PersonIcon className='person-icon'/>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
