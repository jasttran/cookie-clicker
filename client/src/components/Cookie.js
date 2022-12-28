import ChocChip from '../images/choc-chip.png';
import './Cookie.css';
import Halo from '../images/halo.png';
import axios from 'axios';
import popNoise from '../images/popNoise.mp3';


const Cookie = ({ userLoggedIn, setMoney, money }) => {

  function updateDB() {
     // update database everytime cookie is clicked and money is gained
     try {
      axios.put(`${process.env.REACT_APP_URL}/game/updateMoneyStatus`, {
          username: userLoggedIn
      }).then(response => {
          console.log(response);
      });
      } catch(e) {
          console.log(e);
      }
  }

  function incrementCount() {
    setMoney(money + 1)
    if (userLoggedIn) {
      updateDB()
    }
    popSound()
  }

  function popSound() {
    new Audio(popNoise).play();
  }

  return (
    <div className='cookie-container'>
        <p>{money}</p>
        <img className='halo-image' draggable={false} src={Halo} />
        <img className='cookie-image' draggable={false} src={ChocChip}
         onClick={incrementCount}/>
    </div>
  )
}

export default Cookie
