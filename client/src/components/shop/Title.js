import PointerImage from '../../images/pointer.png';
import './Title.css';

const Title = () => {
  return (
    <div className='title'>
         <span className='text-cookie'>Cookie</span>
        <span className='text-clicker'> Clicker</span>
        <div className='text-description'><p>Click it... I dare you</p></div>
        <div className="pointer-image"><img draggable={false} src={PointerImage} /></div>
    </div>
  )
}

export default Title