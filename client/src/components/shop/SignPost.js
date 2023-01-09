import './SignPost.css'
import signpostImg from '../../images/sign-post.png';

const ShopSignPost = ({setShop, atShop}) => {

  function updateShop() {
    setShop(!atShop)
  }

  return (
    <div id='signpost'>
      <img id='signpost-img' draggable={false} src={signpostImg} onClick={updateShop} />
      <div id='signpost-text' onClick={updateShop}>Shop</div>
    </div>
  );
}

export default ShopSignPost
