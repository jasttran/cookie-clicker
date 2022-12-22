import './HomePage.css';
import Header from '../../components/Header';
import Cookie from '../../components/Cookie';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Require username and moneyStatus attribute to be sent.
const LoggedInHomePage = () => {
    const location = useLocation();
    const [money, setMoney] = useState(location.state.moneyStatus);
    const username = location.state.username;
  
    return (
      <div>
        <Navbar isLoggedIn={true} username={username} moneyStatus={money} />
        <div className='homepage-container'>
            <Header className='header-box'/>
            <Cookie className='cookie-box' setMoney={setMoney} money={money} userLoggedIn={username}/>
        </div>
      </div>
    )
}

export default LoggedInHomePage
