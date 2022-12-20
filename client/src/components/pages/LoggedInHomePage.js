import './HomePage.css';
import Header from '../../components/Header';
import Cookie from '../../components/Cookie';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const LoggedInHomePage = () => {
    const [money, setMoney] = useState(0);
    const location = useLocation();
    const username = location.state.username;
    console.log("username: " + username)
  
    // Update starting moneyStatus to be the data saved on account logged in
    useEffect(() => {
        setMoney(location.state.moneyStatus)
    }, [])
  
    // update database everytime cookie is clicked and money is gained
    useEffect(() => {
        try {
            axios.put(`${process.env.REACT_APP_URL}/game/updateMoneyStatus`, {
                username: username
            }).then(response => {
                console.log(response);
            });
        } catch(e) {
            console.log(e);
        }
    }, [money])
  
    return (
      <div>
        <Navbar isLoggedIn={true} username={username} />
        <div className='homepage-container'>
            <Header className='header-box'/>
            <Cookie className='cookie-box' setMoney={setMoney} money={money}/>
        </div>
      </div>
    )
}

export default LoggedInHomePage
