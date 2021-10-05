import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';

// import
import wishlist from './project_images/wishlist-icon.svg';
import item1 from './project_images/item.svg';
import item2 from './project_images/item2.svg';
import minus from './project_images/collapse-icon.svg';


const ItemCard = () => {

  const [productIsVisible, setProductIsVisible] = useState(false);

  const [shippingIsVisible, setShippingIsVisible] = useState(false);

  const [fabricIsVisible, setFabricIsVisible] = useState(false);


  const showProductContent = () => {
    setProductIsVisible(prev => !prev);

  }

  const showShippingContent = () => {
    setShippingIsVisible(prev => !prev);

  }

  const showFabricContent = () => {
    setFabricIsVisible(prev => !prev);

  }


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
          <rectangle className="itemCard__colorRect">
          </rectangle>
      <p className="itemCard__miniTitle, color_gray">SIZE</p>
          <p className="itemCard__size">S M L XL</p>

      <button className="itemCard__button">ADD TO BAG</button>
          <rectangle className="itemCard__rectangle">
            <img src={wishlist} className="itemCard__wishlist" alt="wishlist" />
          </rectangle>

          <div className="itemCard__product">
          <img src={minus} className="itemCard__plus1" onClick={showProductContent} alt="plus"/>
      <p className="itemCard__miniTitle, color_black, margin_left">PRODUCT DESCRIPTION</p>
          {productIsVisible
            ? (
      <p className="itemCard__text, color_gray, margin_left">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel.</p>
            ) : null}
          </div>

          <div className="itemCard__shipping">
          <img src={minus} className="itemCard__plus2" onClick={showShippingContent} alt="plus"/>
      <p className="itemCard__miniTitle, color_black, margin_left">SHIPPING & RETURNS</p>
          {shippingIsVisible
            ? (
              <p className="itemCard__text, color_gray, margin_left">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg.</p>
            ) : null}
          </div>

          <div className="itemCard__fabric">
          <img src={minus} className="itemCard__plus3" onClick={showFabricContent} alt="plus"/>
      <p className="itemCard__miniTitle, color_black, margin_left">FABRIC COMPOSITION</p>
          {fabricIsVisible
            ? (
              <p className="itemCard__text, color_gray, margin_left">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg.</p>
            ) : null}
          </div>

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

