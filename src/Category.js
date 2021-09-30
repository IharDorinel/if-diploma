import React from 'react';

import CategoryContent from "./CategoryContent";



const Category = ({ props }) => {

  return (
    <>
      <section className="category__section">
        <div className="category__titleContainer">
      <span className="category__firstTitle">Shop by the</span>
      <span className="category__secondTitle"> Category</span>
        </div>
      <div className="category__container">
        <CategoryContent props={props} />
      </div>
      </section>
      </>
  )
}

export default Category;