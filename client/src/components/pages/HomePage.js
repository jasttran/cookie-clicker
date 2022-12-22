
import './HomePage.css';
import Header from '../../components/Header';
import Cookie from '../../components/Cookie';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [money, setMoney] = useState(0);

  // Temporary store of data in case when user registers and wants to save progress
  useEffect(() => {
      localStorage.setItem('KOOKI_MONEY_STATUS', JSON.stringify(money));
  }, [money])

  return (
    <div>
      <Navbar isLoggedIn={false}/>
      <div className='homepage-container'>
          <Header className='header-box'/>
          <Cookie className='cookie-box' setMoney={setMoney} money={money} userLoggedIn={null}/>
      </div>
    </div>
  )
}

export default HomePage;
