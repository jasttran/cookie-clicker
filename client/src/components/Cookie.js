import ChocChip from '../images/choc-chip.png';
import './Cookie.css';
import Halo from '../images/halo.png';
import { useState, useEffect } from 'react';

const Cookie = ({ callback }) => {
    const [money, setMoney] = useState(0);

    function incrementCount() {
        setMoney(money + 1)
    }

    // setMoney does not update "money" immediately
    useEffect(() => {
        callback(money)
    })

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
