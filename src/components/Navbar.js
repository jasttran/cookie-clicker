import './Navbar.css'

import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className='kookie'>Kooki</a>
      <ul>
        <li> <a href='/about'>About </a></li>
        <li> <a href='/login'> <PersonIcon className='person-icon'/> Login </a></li>
      </ul>
    </nav>
  )
}

export default Navbar
