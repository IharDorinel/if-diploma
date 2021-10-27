import React from 'react';
import {Link, NavLink} from "react-router-dom";


// images
import cross from "./project_images/remove-icon.svg";
import FavoritesContent from "./FavoritesContent";
import {useSelector} from "react-redux";


const Favorites = () => {
  const items = useSelector(state => state.cart.itemsInFav);

  return (
<>
  <section className="bag__section">
    <NavLink to="/" className="bag__back">Home</NavLink>
    <span className="bag__title">FAVORITES</span>
    <span className="bag__quantity, color_gray">{items.length} items</span>
    <hr/>
    <FavoritesContent items={items} />
  </section>
</>
  )
}

export default Favorites;