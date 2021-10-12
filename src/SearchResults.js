import React from 'react';

// images
import wishlist from "./project_images/wishlist-icon.svg";
import {Link} from "react-router-dom";


const SearchResults = ({props}) => {


  return (
    <section className="filter__section">
      <div className="filter__titleContainer">
        <p className="filter__secondTitle">Search results</p>
      </div>
      <div className="filter__gallery">
        {props.map((elem) => (

          <div className="filter__item" key={elem.id}>

            <img  src={elem.images[0]} className="filter__image" alt={elem.name}/>

            <img src={wishlist} className="filter__wishlist" alt="wishlist" />

            <span className="filter__title"><Link to={`${elem.id}`}>{elem.name}</Link></span>

            <span className="filter__price">$ {elem.price.value}</span>

          </div>

        ))
        }

      </div>

    </section>
  )
}

export default SearchResults;