
import './HomePage.css';
import PointerImage from '../images/pointer.png';
import Header from './Header';
import Cookie from './/Cookie';


const HomePage = () => {
  return (
    <div>
      <div className='homepage-container'> 
          <Header className='box1'/>
          <Cookie />
      </div>
    </div>
  )
}

export default HomePage;


/*div className='box2'>
            <Cookie />
        </div>

        <div className="pointer-image"><img draggable={false} src={PointerImage} /></div>*/