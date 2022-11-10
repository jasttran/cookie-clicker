
import './HomePage.css';
import Header from './Header';
import Cookie from './Cookie';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='homepage-container'> 
          <Header className='header-box'/>
          <Cookie className='cookie-box'/>
      </div>
    </div>
  )
}

export default HomePage;
