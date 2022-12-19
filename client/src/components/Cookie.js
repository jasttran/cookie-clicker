import ChocChip from '../images/choc-chip.png';
import './Cookie.css';
import Halo from '../images/halo.png';

const Cookie = ({ setMoney, money }) => {
  function incrementCount() {
    setMoney(money + 1)
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
