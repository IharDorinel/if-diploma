import React from 'react';

// images
import beauty from './project_images/categories_images/beauty.svg';
import denim from './project_images/categories_images/denim.svg';
import dress from './project_images/categories_images/dress.svg';
import swimwear from './project_images/categories_images/swimwear.svg';
import tees from './project_images/categories_images/tees.svg';
import tops from './project_images/categories_images/tops.svg';



const Category = () => {

  return (
    <>
      <section className="category__section">
      <span className="category__firstTitle">Shop by the</span>
      <span className="category__secondTitle"> Category</span>
      <div className="category__container">
      <rectangle>
        <img src={dress} className="category__image" alt="dress" />
        <p className="category__text">Dresses</p>
      </rectangle>
      <rectangle>
        <img src={tees} className="category__image" alt="tees" />
        <p className="category__text">Tees</p>
      </rectangle>
      <rectangle>
        <img src={swimwear} className="category__image" alt="swimwear" />
        <p className="category__text">Swimwear</p>
      </rectangle>
      <rectangle>
        <img src={denim} className="category__image" alt="denim" />
        <p className="category__text">Denim</p>
      </rectangle>
      <rectangle>
        <img src={tops} className="category__image" alt="tops" />
        <p className="category__text">Tops</p>
      </rectangle>
      <rectangle>
        <img src={beauty} className="category__image" alt="beauty" />
        <p className="category__text">Beauty</p>
    </rectangle>
      </div>
      </section>
    </>
  )
}

export default Category;