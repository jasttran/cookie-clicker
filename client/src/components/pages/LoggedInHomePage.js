import './HomePage.css';
import Header from '../../components/Header';
import Cookie from '../../components/Cookie';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoggedInHomePage = () => {
    const [money, setMoney] = useState(0);
    const location = useLocation();
  
    // Update starting moneyStatus to be the data saved on account logged in
    useEffect(() => {
        setMoney(location.state.moneyStatus)
    }, [])
  
    // update database everytime cookie is clicked an money is gained
    useEffect(() => {
        //TODO update DB
    }, [money])
  
    return (
      <div>
        <Navbar isLoggedIn={true} />
        <div className='homepage-container'>
            <Header className='header-box'/>
            <Cookie className='cookie-box' setMoney={setMoney} money={money}/>
        </div>
      </div>
    )
}

export default LoggedInHomePage
