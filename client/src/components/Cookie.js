import ChocChip from '../images/choc-chip.png';
import './Cookie.css';
import Halo from '../images/halo.png';
import { useState, useEffect } from 'react';

const Cookie = () => {
    const [money, setMoney] = useState(0);

    function incrementCount() {
        setMoney(money + 1)
    }

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('KOOKI_MONEY_STATUS'));
      if (data) {
        setMoney(data)
      }
    }, [])

    // setMoney does not update "money" immediately
    useEffect(() => {
        console.log('money' + money)
        localStorage.setItem('KOOKI_MONEY_STATUS', JSON.stringify(money));
    }, [money])

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
