import React from 'react';
import {Link} from "react-router-dom";


// images
import wishlist from './project_images/wishlist-icon.svg';


const SaleContent = ({props}) => {

  const percent = 32;

  return (
    <>
      {props.map((elem) => (
        <div className="saleContent__item">
          <img src={elem.images[0]} className="saleContent__image" alt={elem.name}>
            <Link to={`/${elem.id}`}/>
          </img>
          <img src={wishlist} className="saleContent__wishlist" alt="wishlist" />
          <rectangle className="saleContent__rectangle">
            <p className="saleContent__discount">-{percent}%</p>
            </rectangle>
          <span className="saleContent__price">$ {elem.price.value}</span>
          <span className="saleContent__perPrice">$ {elem.price.value * (100 - percent) / 100}</span>
        </div>
      ))
      }
    </>
  )
}

export default SaleContent;

