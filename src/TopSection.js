import React from 'react';

// images
import logo from './project_images/brand-logo.svg';
import loupe from './project_images/Vector.svg';
import wishlist from './project_images/wishlist-icon.svg';


const TopSection = () => {



  return (
    <>
      <div className="header__bigContainer">

        <div className="header__mainContainer">
        <div className="header__leftUpperContainer">
        <p className="header__page">NEW ARRIVALS</p>
        <p className="header__page">SHOP</p>
        <p className="header__page">COLLECTIONS</p>
        </div>

          <img src={logo} className="header__logo" alt="logo" />

        <div className="header__rightUpperContainer">
          <div className="header__searchContainer">
          <img className="header__loupe" src={loupe} alt="loupe" />
          <p className="header__page">SEARCH</p>
        </div>
          <p className="header__page">SIGN IN</p>
          <p className="header__page">BAG (2)</p>
          <img src={wishlist} className="header__wishlist" alt="wishlist" />
        </div>
       
        </div>

        <div className="header__lowerContainer">
        <h1 className="header__header">NEW COLLECTION</h1>
          <p className="header__text">Our easiest chuck-on-and-go staples come with a serious style heritage<br/>
            that’s liberating, sexy, comfy and supremely cool.</p>
        <button type="submit" className="header__button">SHOP NEW ARRIVALS</button>
        </div>

      </div>

    </>
  )
}

export default TopSection;