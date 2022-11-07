
import './HomePage.css';
import Header from './Header';
import Cookie from './/Cookie';


const HomePage = () => {
  return (
    <div>
      <div className='homepage-container'> 
          <Header className='header-box'/>
          <Cookie className='cookie-box'/>
      </div>
    </div>
  )
}

export default HomePage;
