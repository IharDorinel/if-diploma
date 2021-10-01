import React from 'react';
import {NavLink, useParams} from 'react-router-dom';

// import
import wishlist from './project_images/wishlist-icon.svg';
import item1 from './project_images/item.svg';
import item2 from './project_images/item2.svg';
import minus from './project_images/collapse-icon.svg';


const ItemCard = () => {


  return (
    <>
      <div className="itemCard__section">

      <img src={item1} className="itemCard__image" alt="item.image"/>
      <img src={item2} className="itemCard__image" alt="item.image"/>

        <div className="itemCard__descrContainer">
        <p className="itemCard__title">CHALK SAINTS BOYFRIEND</p>
      <p className="itemCard__miniTitle, color_black">USD $300.00</p>
      <p className="itemCard__miniTitle, color_lightGray">PRE-ORDER</p>
      <p className="itemCard__miniTitle, color_gray">COLOR</p>
      <p className="itemCard__miniTitle, color_gray">SIZE</p>
          <p className="itemCard__size">S M L XL</p>

      <button className="itemCard__button">ADD TO BAG</button>
          <rectangle className="itemCard__rectangle">
            <img src={wishlist} className="itemCard__wishlist" alt="wishlist" />
          </rectangle>

          <img src={minus} className="itemCard__plus1" alt="plus"/>
      <p className="itemCard__miniTitle, color_black, margin-left">PRODUCT DESCRIPTION</p>
      <p className="itemCard__text, color_gray, margin-left">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel.</p>
          <img src={minus} className="itemCard__plus2" alt="plus"/>
      <p className="itemCard__miniTitle, color_black, margin-left">SHIPPING & RETURNS</p>
          <img src={minus} className="itemCard__plus3" alt="plus"/>
      <p className="itemCard__miniTitle, color_black, margin-left">FABRIC COMPOSITION</p>

        </div>
      </div>
    </>
  )
}

export default ItemCard;

// const { id } = useParams();
//
// const [item, setItem] = useState(null);
//
// useEffect(() => {
//   fetch(`https://modnikky-api.herokuapp.com/api/catalog/${id}`)
//     .then(res => res.json())
//     .then(data => setItem(data))
// }, [])
//
// if(item === null) {
//   return <h3>404 Not found</h3>;
// };

