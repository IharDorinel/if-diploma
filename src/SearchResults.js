import React from 'react';

// images
import ellipse from "./project_images/Ellipse.svg";
import arrow from "./project_images/arrow.svg";
import SaleContent from "./SaleContent";


const SearchResults = ({props}) => {


  return (
    <section className="sale__section">
      <div className="sale__gallery">
        <img src={ellipse} className="sale__ellipse" alt="ellipse" />
        <img src={arrow} className="sale__arrow" alt="arrow" />
        <SaleContent props={props}/>
      </div>
    </section>
  )
}

export default SearchResults;