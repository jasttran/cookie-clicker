
import './HomePage.css';
import Header from '../../components/Header';
import Cookie from '../../components/Cookie';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [money, setMoney] = useState(0);
  const [loc, setLocation] = useState(null);
  const location = useLocation();

  // setLocation when Login/Register component sends savedMoneyStatus
  if (location.state !== null && location.state.moneyStatus !== null &&
    loc === null) {
    setLocation(location.state);
  }

  // Update moneyStatus to be the data saved on account logged in
  useEffect(() => {
    console.log(loc)
    if (loc !== null && loc.moneyStatus !== null && 
        (loc.fromLogin || loc.fromRegister)) {
      setMoney(loc.moneyStatus)
    }
  }, [loc])

  window.onbeforeunload = function() {
    localStorage.clear();
  }

  // Temporary store of data in case when user registers and wants to save progress
  useEffect(() => {
      localStorage.setItem('KOOKI_MONEY_STATUS', JSON.stringify(money));
  }, [money])

  return (
    <div>
      <Navbar/>
      <div className='homepage-container'>
          <Header className='header-box'/>
          <Cookie className='cookie-box' setMoney={setMoney} money={money}/>
      </div>
    </div>
  )
}

export default HomePage;
