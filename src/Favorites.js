import React from 'react';
import {Link, NavLink} from "react-router-dom";


// images
import cross from "./project_images/remove-icon.svg";


const Favorites = ({favorites}) => {


  return (
<>
  <section className="bag__section">
    <NavLink to="/" className="bag__back">Back</NavLink>
    <span className="bag__title">FAVORITES</span>
    <span className="bag__quantity, color_gray">{favorites.length} items</span>
    <hr/>
  {favorites.map((item) => (
    <>
      <div className="bag__container" key={item.id}>
        <img src={item.images[1]} className="bag__image" alt="bag" />
        <div className="bag__descrContainer">
          <p className="bag__itemName">{item.name}</p>
        </div>
      </div>

      <div className="bag__removeContainer">
        <button className="toBag__button">ADD TO BAG</button>
        <img src={cross} className="bag__cross" alt="cross" />
        <span className="bag__text">REMOVE</span>
      </div>
      <hr/>
    </>
  ))
  }
  </section>
</>
  )
}

export default Favorites;