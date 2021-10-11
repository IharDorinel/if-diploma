import React, {useEffect, useState} from 'react';
import {Link, NavLink, useParams} from 'react-router-dom';

// images
import wishlist from './project_images/wishlist-icon.svg';
import minus from './project_images/collapse-icon.svg';
import plus from './project_images/Union.svg';


const ItemCard = ({data, bagContent, setBagContent}) => {

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


  const addToBag = (data) => {

    let list = JSON.parse(localStorage.getItem('ID')) || [];


    const itemIndex = list.findIndex(value => value.id === id);


    if(itemIndex < 0) {
      list.push(data.filter((item) => item.id === id))
    }

    localStorage.setItem('ID', JSON.stringify(list.flat()));
    setBagContent(list.flat());

  }


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

      {
        data.filter((item) => item.id === id)
          .map((item) => (
        <section className="itemCard__section">
          <NavLink to="/" className="itemCard__back">Back</NavLink>
        <img src={item.images[0]} className="itemCard__image" alt="item.image"/>
        <img src={item.images[1]} className="itemCard__image" alt="item.image"/>

        <div className="itemCard__descrContainer">
        <p className="itemCard__title" key={item.id}>{item.name}</p>
        <div>
        <p className="itemCard__miniTitle, itemCard__price, color_black">USD ${item.price.value}</p>
        <p className="itemCard__miniTitle, itemCard__order, color_lightGray">PRE-ORDER</p>
        </div>

        <p className="itemCard__miniTitle, itemCard__color, color_gray">COLOR</p>
        <rectangle className="itemCard__colorRect" style={{ backgroundColor: `${item.color.hex}` }}>
        </rectangle>

        <p className="itemCard__miniTitle, itemCard__size, color_gray">SIZE</p>

        <div className="itemCard__sizeContainer">
        <span className="itemCard__size">{item.availableSizes.join('').split(',')[0].trim()}</span>
        <span className="itemCard__size">{item.availableSizes.join('').split(',')[1].trim()}</span>
        </div>

          <div className="itemCard__buttonContainer">
        <button className="itemCard__button" onClick={() => addToBag(data)}><Link to={`/bag/${item.id}`}>ADD TO BAG</Link></button>
        <rectangle className="itemCard__rectangle">
        <img src={wishlist} className="itemCard__wishlist" alt="wishlist" />
        </rectangle>
          </div>

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
        <p className="itemCard__descrText">{item.description}</p>
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
          ))
      }

    </>
  )
}

export default ItemCard;



