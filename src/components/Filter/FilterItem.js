import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const FilterItem = ({item, setItemFav}) => {
  
  const itemsFav = useSelector(state => state.cart.itemsInFav);
  
  const isItemInFav = itemsFav.some(elem => elem.id === item.id);
 
  const handleClickFav = (e) => {
    e.stopPropagation();
    setItemFav(item);
  }

  return (
    <>
      <div className="saleContent__item" key={item.id}>
        <img  src={item.images[0]} className="filter__image" alt={item.name}/>
        {isItemInFav ? (
            <div className="saleContent__wishlistNew" onClick={handleClickFav}>
            </div>
          ) :
          <div className="saleContent__wishlist" onClick={handleClickFav}>
          </div>
        }
        <span className="filter__title"><Link to={`${item.id}`}>{item.name}</Link></span>
        <span className="filter__price">$ {item.price.value / 100}</span>
      </div>
    </>
  )
}

export default FilterItem;