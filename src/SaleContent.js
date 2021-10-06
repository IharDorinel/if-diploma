import React from 'react';
import {Link, BrowserRouter as Router} from "react-router-dom";


// images
import wishlist from './project_images/wishlist-icon.svg';


const SaleContent = ({props}) => {

  const percent = 32;

  return (
    <>
      {props.map((elem) => (
        <Router>
          <Link to={`/${elem.id}`}/>
        <div className="saleContent__item" key={elem.id}>

          <img  src={elem.images[0]} className="saleContent__image" alt={elem.name}/>

          <img src={wishlist} className="saleContent__wishlist" alt="wishlist" />
          <rectangle className="saleContent__rectangle">
            <p className="saleContent__discount">-{percent}%</p>
            </rectangle>
          <Router>
          <span className="saleContent__price"><Link to={`${elem.id}`}>$ {elem.price.value}</Link></span>
          </Router>
          <span className="saleContent__perPrice">$ {elem.price.value * (100 - percent) / 100}</span>
        </div>
        </Router>
      ))
      }
    </>
  )
}

export default SaleContent;

