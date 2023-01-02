import './SignPost.css'
import signpostImg from '../images/sign-post.png';

const ShopSignPost = () => {
  return (
    <div id='signpost'>
      <img id='signpost-img' draggable={false} src={signpostImg} />
      <div id='signpost-text'>Shop</div>
    </div>
  );
}

export default ShopSignPost
