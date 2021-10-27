import React, {useState} from 'react';
import EnterSearch from "./EnterSearch";
import SearchResults from "./SearchResults";
import Account from "./Account";

// images
import logo from './project_images/brand-logo.svg';
import logo_black from './project_images/brand-logo-black.svg';
import loupe from './project_images/Vector.svg';
import wishlist from './project_images/wishlist-icon_black.svg';
import {Link, NavLink} from "react-router-dom";
import bag from "./project_images/shopping-cart-icon-black.svg";
import burger from "./project_images/Rectangle-black.svg";
import {useSelector} from "react-redux";



const TopSection = () => {

  const bagItems = useSelector(state => state.cart.itemsInCart);

  const favItems = useSelector(state => state.cart.itemsInFav);


  return (
    <>

      <div className="header__bigContainerNew">

        <div className="header__mainContainer">
          <div className="header__leftUpperContainer">
            <p className="header__pageNew">NEW ARRIVALS</p>
            <p className="header__pageNew">SHOP</p>
            <p className="header__pageNew">COLLECTIONS</p>
          </div>

          <div className="header__burgerContainer">
            <img src={burger} className="header__burger1" alt="burger" />
            <img src={burger} className="header__burger1" alt="burger" />
            <img src={burger} className="header__burger2" alt="burger" />
          </div>
          <NavLink to="/">
          <img src={logo_black} className="header__logo" alt="logo" />
          </NavLink>
          <div className="header__rightUpperContainer">
            <p className="header__pageNew"><Link to="/bag">BAG ({bagItems.length})</Link></p>
            <Link to="/bag">
              <img src={bag} className="header__bag" alt="bag" />
            </Link>

            <rectangle>
              <div className="header__wishlistCont">
                <Link to="/favorites">
                  <img src={wishlist} className="header__wishlist" alt="wishlist" /></Link>
                <span className="header__countNew">({favItems.length})</span>
              </div>
            </rectangle>
          </div>

        </div>
      </div>

    </>
  )
}

export default TopSection;