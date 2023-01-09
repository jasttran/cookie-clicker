import { useState } from 'react';
import './Header.css';
import SignPost from './SignPost';
import Title from './Title';
import Shop from './Shop';

const Header = () => {
  const [atShop, setShop] = useState(false);

  return (
    <div className='header'>
        <SignPost setShop={setShop} atShop={atShop}/>
        {atShop ? <Shop /> : <Title />}
    </div>
  )
}

export default Header
