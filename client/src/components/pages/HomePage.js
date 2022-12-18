
import './HomePage.css';
import Header from '../../components/Header';
import Cookie from '../../components/Cookie';
import Navbar from '../../components/Navbar';

const HomePage = () => {
  let money = 0;

  function updateMoney(newMoney) {
    money = newMoney;
  }

  return (
    <div>
      <Navbar money={money}/>
      <div className='homepage-container'>
          <Header className='header-box'/>
          <Cookie className='cookie-box' callback={updateMoney}/>
      </div>
    </div>
  )
}

export default HomePage;
