
import IconButton from '@mui/material/IconButton';
import ChocChip from '../images/choc-chip.png'
import './Cookie.css';
import { useState } from 'react';
import PointerImage from '../images/pointer.png';


const Cookie = () => {
    const [money, setMoney] = useState(0);
    const [increment, setIncrement] = useState(99999999999999999999999)
    const [priceIncrement, setPriceIncrement] = useState(10)

    function incrementCount() {
        setMoney(money + increment)
    }

    function increaseIncrement() {
        if (money >= priceIncrement) {
            setMoney(money - priceIncrement)
            setPriceIncrement(priceIncrement * 10)
            setIncrement(increment + 1)
        }
    }

  return (
    <div>
      <div className='cookie-container'> 
        <div className='box1'>
          <span className='text-cookie'>Cookie</span>
          <span className='text-clicker'> Clicker</span>
          <div className='text-description'><p>Click it... I dare you</p></div>
        </div>
        <div className='box2'>
          <div className='cookie-image'>
            <IconButton disableRipple="true" onClick={incrementCount}>
                <img draggable={false} src={ChocChip} />
            </IconButton>
          </div>
        </div>
        <div className="pointer-image"><img draggable={false} src={PointerImage} /></div>
      </div>

      <h1>$ {money}</h1>

      <button onClick={increaseIncrement}>${priceIncrement} to Increase to ${increment + 1} per click</button>
    </div>
  )
}

export default Cookie;