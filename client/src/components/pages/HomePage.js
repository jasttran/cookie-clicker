
import './HomePage.css';
import Header from '../../components/Header';
import Cookie from '../../components/Cookie';
import Navbar from '../../components/Navbar';

const HomePage = () => {
  function displayMoney(money) {
    console.log("from parent: " + money);
  }
  return (
    <div>
      <Navbar />
      <div className='homepage-container'>
          <Header className='header-box'/>
          <Cookie className='cookie-box' callback={displayMoney}/>
      </div>
    </div>
  )
}

export default HomePage;
