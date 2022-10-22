import CookieIcon from '@mui/icons-material/Cookie';
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
    <div className='Cookie'>
      <h1>CLICK ME</h1>
      <CookieIcon onClick={incrementCount} />
      <h1>$ {money}</h1>

      <button onClick={increaseIncrement}>${priceIncrement} to Increase to ${increment + 1} per click</button>
    </div>
  )
}

export default Cookie;