import React, {useState} from 'react';
import {Link, BrowserRouter as Router} from "react-router-dom";
import FilterItems from "./FilterItems";
import Block from "./Block";

// images
import dress from "./project_images/categories_images/dress.svg";
import tees from "./project_images/categories_images/tees.svg";
import swimwear from "./project_images/categories_images/swimwear.svg";
import denim from "./project_images/categories_images/denim.svg";
import tops from "./project_images/categories_images/tops.svg";
import beauty from "./project_images/categories_images/beauty.svg";
import wishlist from "./project_images/wishlist-icon.svg";



const CategoryContent = ({ props }) => {

  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState([]);

  const [blockData, setBlockData] = useState([]);

  const fetchData = () => fetch('https://modnikky-api.herokuapp.com/api/catalog')
    .then(res => res.json());

  const showContent = (e) => {
    setIsVisible(false);

    fetchData(e.target.textContent)
      .then((data) => data.filter(obj => obj?.type?.includes(e.target.textContent)))
      .then((data) => setData(data))
      .catch((err) => setData([]))
  }

  const showBlock = (e) => {
    setIsVisible(true);
    setData([]);
    setBlockData(e.target.textContent);
  }

  const filterItems = data.length > 0 ? <FilterItems props={data}/> : null


  return (
    <>
      <div className="category__contContainer">
      <div className="category__rectContainer">
      <rectangle className="category__rectangle">
        <img src={dress} className="category__image" alt="tees" />

        <p className="category__text" onClick={showContent}>Dresses</p>

      </rectangle>
        <rectangle className="category__rectangle">
        <img src={tees} className="category__image" alt="tees" />

        <p className="category__text" onClick={showContent} >Tees</p>

      </rectangle>
      <rectangle className="category__rectangle">
        <img src={swimwear} className="category__image" alt="swimwear" />

        <p className="category__text" onClick={showContent} >Swimwear</p>

      </rectangle>
      <rectangle className="category__rectangle">
        <img src={denim} className="category__image" alt="denim" />

        <p className="category__text" onClick={showContent} >Denim</p>

      </rectangle>
      <rectangle className="category__rectangle">
        <img src={tops} className="category__image" alt="tops" />
        <p className="category__text" onClick={showBlock} >Tops</p>
      </rectangle>
      <rectangle className="category__rectangle">
        <img src={beauty} className="category__image" alt="beauty" />
        <p className="category__text" onClick={showBlock} >Beauty</p>
      </rectangle>
      </div>

      <div>
      {filterItems}

        {isVisible
          ? (
        <Block blockData={blockData}/>
          ) : null}
      </div>
      </div>
      </>
)}

export default CategoryContent;


