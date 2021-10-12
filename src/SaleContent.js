import React from 'react';
import {Link, BrowserRouter as Router, useParams} from "react-router-dom";


// images
import wishlist from './project_images/wishlist-icon.svg';


const SaleContent = ({data, setHeaderStyle}) => {

  const percent = 32;


  return (
    <>
      {data.map((elem) => (
       <>
        <div className="saleContent__item" key={elem.id}>

          <a href="#" className="saleContent__image-link">
          <img  src={elem.images[0]} className="saleContent__image" alt={elem.name}/>
          </a>
          <img src={wishlist} className="saleContent__wishlist" alt="wishlist" />
          <button type="submit" className="saleContent__button">ADD TO BAG</button>
          <rectangle className="saleContent__rectangle">
            <p className="saleContent__discount">-{percent}%</p>
            </rectangle>

        <span className="saleContent__title" onClick={setHeaderStyle('header__bigContainerNew')}>
          <Link to={`${elem.id}`}>{elem.name}</Link>
        </span>

         <span className="saleContent__price">$ {elem.price.value}</span>

           <span className="saleContent__perPrice">$ {elem.price.value * (100 - percent) / 100}</span>
          </div>
       </>
      ))
      }
    </>
  )
}

export default SaleContent;

