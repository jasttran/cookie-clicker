import ChocChip from '../images/choc-chip.png';
import './Cookie.css';
import Halo from '../images/halo.png';
import { useState } from 'react';

const Cookie = () => {
    const [money, setMoney] = useState(0);
    const [increment, setIncrement] = useState(1)
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
    <div className='cookie-container'>
        <img className='halo-image' draggable={false} src={Halo} />
        <img className='cookie-image' draggable={false} src={ChocChip}
         onClick={incrementCount}/>
        <p>{money}</p>
    </div>
  )
}

export default Cookie

/* <button onClick={increaseIncrement}>${priceIncrement} to Increase to ${increment + 1} per click</button>
        <h1>$ {money}</h1> 
        <IconButton disableRipple="true" onClick={incrementCount}>
        
*/