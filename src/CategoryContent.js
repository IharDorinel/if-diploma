import React from 'react';
import {Link} from "react-router-dom";

// images
import dress from "./project_images/categories_images/dress.svg";
import tees from "./project_images/categories_images/tees.svg";
import swimwear from "./project_images/categories_images/swimwear.svg";
import denim from "./project_images/categories_images/denim.svg";
import tops from "./project_images/categories_images/tops.svg";
import beauty from "./project_images/categories_images/beauty.svg";


const CategoryContent = ({ props }) => {

  return (
    <>
      <rectangle>
        <img src={dress} className="category__image" alt="tees" />
        <p className="category__text">
          <Link to={`/type`}>Dresses</Link>
        </p>
      </rectangle>
        <rectangle>
        <img src={tees} className="category__image" alt="tees" />
        <p className="category__text">
          <Link to={`/type`}>Tees</Link>
        </p>
      </rectangle>
      <rectangle>
        <img src={swimwear} className="category__image" alt="swimwear" />
        <p className="category__text">
          <Link to={`/type`}>Swimwear</Link>
        </p>
      </rectangle>
      <rectangle>
        <img src={denim} className="category__image" alt="denim" />
        <p className="category__text">
          <Link to={`/type`}>Denim</Link>
        </p>
      </rectangle>
      <rectangle>
        <img src={tops} className="category__image" alt="tops" />
        <p className="category__text">Tops</p>
      </rectangle>
      <rectangle>
        <img src={beauty} className="category__image" alt="beauty" />
        <p className="category__text">Beauty</p>
      </rectangle>

    </>
)}

export default CategoryContent;


