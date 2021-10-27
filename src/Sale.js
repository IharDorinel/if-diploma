import React, {useEffect} from 'react';
import SaleContent from "./SaleContent";



// images
import ellipse from "./project_images/Ellipse.svg";
import arrow from "./project_images/arrow.svg";


const Sale = ({ data }) => {



  return (
    <>
    <section className="sale__section">
      <div className="category__titleContainer">
      <span className="sale__firstTitle">#MODNIKKY_</span>
      <span className="sale__secondTitle">Sale</span>
      </div>

      <div className="sale__gallery">
        {/*<img src={ellipse} className="sale__ellipse" alt="ellipse" />*/}
        {/*<img src={arrow} className="sale__arrow" alt="arrow" />*/}

        <SaleContent data={data}/>

      </div>

    </section>
    </>
  )
}

export default Sale;

