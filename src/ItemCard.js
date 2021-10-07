import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';

// import
import wishlist from './project_images/wishlist-icon.svg';
import item1 from './project_images/item.svg';
import item2 from './project_images/item2.svg';
import minus from './project_images/collapse-icon.svg';
import plus from './project_images/Union.svg';


const ItemCard = () => {

  const [productIsVisible, setProductIsVisible] = useState(false);

  const [productPlusIsVisible, setProductPlusIsVisible] = useState(true);

  const [productMinusIsVisible, setProductMinusIsVisible] = useState(false);

  const [shippingIsVisible, setShippingIsVisible] = useState(false);

  const [shippingPlusIsVisible, setShippingPlusIsVisible] = useState(true);

  const [shippingMinusIsVisible, setShippingMinusIsVisible] = useState(false);

  const [fabricIsVisible, setFabricIsVisible] = useState(false);

  const [fabricPlusIsVisible, setFabricPlusIsVisible] = useState(true);

  const [fabricMinusIsVisible, setFabricMinusIsVisible] = useState(false);

  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://modnikky-api.herokuapp.com/api/catalog/${id}`)
      .then((response) => response.json())
      .then((response) => setItem(response));
  }, []);

  if(item === null) {
    return <h3>404 Not found</h3>;
  };


  const showProductContent = () => {
    setProductIsVisible(prev => !prev);
    setProductPlusIsVisible(prev => !prev);
    setProductMinusIsVisible(prev => !prev);
  }


  const showShippingContent = () => {
    setShippingIsVisible(prev => !prev);
    setShippingPlusIsVisible(prev => !prev);
    setShippingMinusIsVisible(prev => !prev);
  }

  const showFabricContent = () => {
    setFabricIsVisible(prev => !prev);
    setFabricPlusIsVisible(prev => !prev);
    setFabricMinusIsVisible(prev => !prev);
  }


  return (
    <>


      <section className="itemCard__section">

      <img src={item1} className="itemCard__image" alt="item.image"/>
      <img src={item2} className="itemCard__image" alt="item.image"/>

        <div className="itemCard__descrContainer">
          <p className="itemCard__title">{item.name}</p>
          <div>
      <p className="itemCard__miniTitle, itemCard__price, color_black">USD $300.00</p>
      <p className="itemCard__miniTitle, itemCard__order, color_lightGray">PRE-ORDER</p>
          </div>

      <p className="itemCard__miniTitle, itemCard__color, color_gray">COLOR</p>
          <rectangle className="itemCard__colorRect">
          </rectangle>

      <p className="itemCard__miniTitle, itemCard__size, color_gray">SIZE</p>

          <div className="itemCard__sizeContainer">
          <span className="itemCard__size">S</span>
          <span className="itemCard__size">M</span>
          <span className="itemCard__size">L</span>
          <span className="itemCard__size">XL</span>
          </div>


      <button className="itemCard__button">ADD TO BAG</button>
          <rectangle className="itemCard__rectangle">
            <img src={wishlist} className="itemCard__wishlist" alt="wishlist" />
          </rectangle>

          <div className="itemCard__drop">
            {productPlusIsVisible
              ? (
            <img src={plus} className="itemCard__plus" onClick={showProductContent} alt="plus"/>
              ) : null}
            {productMinusIsVisible
              ? (
          <img src={minus} className="itemCard__minus" onClick={showProductContent} alt="minus"/>
              ) : null}
            <div className="itemCard__dropText">
      <p className="itemCard__miniTitle, color_black, margin_left">PRODUCT DESCRIPTION</p>
          {productIsVisible
            ? (
      <p className="itemCard__descrText">Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across the hips, bow shape legs, with knee darts and tapered leg. Back pockets dropped slightly for slouch feel.</p>
            ) : null}
            </div>
          </div>

          <div className="itemCard__drop">
            {shippingPlusIsVisible
              ? (
            <img src={plus} className="itemCard__plus" onClick={showShippingContent} alt="plus"/>
              ) : null}
            {shippingMinusIsVisible
              ? (
            <img src={minus} className="itemCard__minus" onClick={showShippingContent} alt="minus"/>
              ) : null}
            <div className="itemCard__dropText">
      <p className="itemCard__miniTitle, color_black, margin_left">SHIPPING & RETURNS</p>
          {shippingIsVisible
            ? (
              <p className="itemCard__descrText">Saints are a low-waist, drop crotch relaxed boyfriend jean.</p>
            ) : null}
            </div>
          </div>

          <div className="itemCard__drop">
            {fabricPlusIsVisible
              ? (
            <img src={plus} className="itemCard__plus" onClick={showFabricContent} alt="plus"/>
              ) : null}
            {fabricMinusIsVisible
              ? (
            <img src={minus} className="itemCard__minus" onClick={showFabricContent} alt="minus"/>
              ) : null}
            <div className="itemCard__dropText">
      <p className="itemCard__miniTitle, color_black, margin_left">FABRIC COMPOSITION</p>
          {fabricIsVisible
            ? (
              <p className="itemCard__descrText">Saints are a low-waist, drop crotch relaxed boyfriend jean.</p>
            ) : null}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ItemCard;



