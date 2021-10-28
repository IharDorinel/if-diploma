import React from 'react';

// components
import SaleContent from "./SaleContent";


const Sale = ({ data, setItemFav }) => {
  
  return (
    <>
      <section className="sale__section">
        <div className="category__titleContainer">
          <span className="sale__firstTitle">#MODNIKKY_</span>
          <span className="sale__secondTitle">Sale</span>
        </div>
        <div className="sale__gallery">
          <SaleContent data={data} setItemFav={setItemFav}/>
        </div>
      </section>
    </>
  )
}

export default Sale;

