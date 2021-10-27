import React from 'react';
import {Link, BrowserRouter as Router, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, deleteItemFromFav, setItemInCart, setItemInFav} from "./store/reducers/cartReducer";



// images
import wishlist from './project_images/wishlist-icon.svg';


const SaleContentItem = ({item}) => {

  const itemsBag = useSelector(state => state.cart.itemsInCart);

  const itemsFav = useSelector(state => state.cart.itemsInFav);

  const isItemInCard = itemsBag.some(elem => elem.id === item.id);

  const isItemInFav = itemsFav.some(elem => elem.id === item.id);

  const dispatch = useDispatch();

  const handleClickBag = (e) => {
    console.log(item.id)
    e.stopPropagation();
    if(isItemInCard) {
      dispatch(deleteItemFromCart(item.id))
    } else {
      dispatch(setItemInCart(item))
    }
  }

  const handleClickFav = (e) => {
    console.log(item.id)
    e.stopPropagation();
    if(isItemInFav) {
      dispatch(deleteItemFromFav(item.id))
    } else {
      dispatch(setItemInFav(item))
    }
  }

  const percent = 32;

  return (
    <>
    <div className="saleContent__item" key={item.id}>


          <a href="#" className="saleContent__image-link">
        <img src={item.images[0]} className="saleContent__image" alt={item.name}/>
          </a>


      <img src={wishlist} className="saleContent__wishlist" alt="wishlist" onClick={handleClickFav} />

      <button type="submit" className="saleContent__button" onClick={handleClickBag}>
        {isItemInCard ? (
          'REMOVE'
          )
          : 'ADD TO BAG'}
      </button>

      <rectangle className="saleContent__rectangle">
        <p className="saleContent__discount">-{percent}%</p>
      </rectangle>

      <span className="saleContent__title">
          <Link to={`${item.id}`}>{item.name}</Link>
        </span>
      <p className="saleContent__price">$ {item.price.value / 100}</p>

      <span className="saleContent__perPrice">$ {(item.price.value / 100 * (100 - percent) / 100).toFixed(1)}</span>
    </div>
    </>
  )
}

export default SaleContentItem;