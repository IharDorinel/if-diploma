import React from 'react';
import {Link} from "react-router-dom";

// images
import wishlist from "./project_images/wishlist-icon.svg";
import FilterItem from "./FilterItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, deleteItemFromFav, setItemInCart, setItemInFav} from "./store/reducers/cartReducer";





const FilterItems = ({ props }) => {


  return (
    <>

      <section className="filter__section">
        <div className="filter__titleContainer">
          <p className="filter__secondTitle">{props[0].type}</p>
        </div>
        <div className="filter__gallery">
          {props.map((item) => (
            <FilterItem item={item}/>
          ))
          }
        </div>
      </section>
    </>
  )
}

export default FilterItems;