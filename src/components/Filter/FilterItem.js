import React from 'react';
import {Link} from "react-router-dom";

// images
import wishlist from "../../project_images/wishlist-icon.svg";


const FilterItem = ({item, setItemFav}) => {
 
  const handleClickFav = (e) => {
    e.stopPropagation();
    setItemFav(item);
  }

  return (
    <>
      <div className="saleContent__item" key={item.id}>
        <img  src={item.images[0]} className="filter__image" alt={item.name}/>
        <img src={wishlist} className="filter__wishlist" alt="wishlist" onClick={handleClickFav}/>
        <span className="filter__title"><Link to={`${item.id}`}>{item.name}</Link></span>
        <span className="filter__price">$ {item.price.value / 100}</span>
      </div>
    </>
  )
}

export default FilterItem;