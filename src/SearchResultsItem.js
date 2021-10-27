import React from 'react';
import wishlist from "./project_images/wishlist-icon.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromFav, setItemInFav} from "./store/reducers/cartReducer";


const SearchResultsItem = ({item}) => {

  const itemsFav = useSelector(state => state.cart.itemsInFav);

  const isItemInFav = itemsFav.some(elem => elem.id === item.id);

  const dispatch = useDispatch();


  const handleClickFav = (e) => {
    console.log(item.id)
    e.stopPropagation();
    if(isItemInFav) {
      dispatch(deleteItemFromFav(item.id))
    } else {
      dispatch(setItemInFav(item))
    }
  }

  return (
    <>
      <div className="filter__item" key={item.id}>

        <img  src={item.images[0]} className="filter__image" alt={item.name}/>

        <img src={wishlist} className="filter__wishlist" alt="wishlist" onClick={handleClickFav}/>

        <span className="filter__title"><Link to={`${item.id}`}>{item.name}</Link></span>

        <span className="filter__price">$ {item.price.value / 100}</span>

      </div>
    </>
  )
}

export default SearchResultsItem;