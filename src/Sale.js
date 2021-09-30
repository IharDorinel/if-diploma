import React, {useEffect, useState} from 'react';
import SaleContent from "./SaleContent";

// images
import ellipse from "./project_images/Ellipse.svg";
import arrow from "./project_images/arrow.svg";


const Sale = ({ props }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://modnikky-api.herokuapp.com/api/catalog')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.err)
  }, [])

  return (
    <>
    <section className="sale__section">
      <div className="category__titleContainer">
      <span className="sale__firstTitle">#MODNIKKY_</span>
      <span className="sale__secondTitle">Sale</span>
      </div>
      <div className="sale__gallery">
        <img src={ellipse} className="sale__ellipse" alt="ellipse" />
        <img src={arrow} className="sale__arrow" alt="arrow" />
        <SaleContent props={props}/>
      </div>
    </section>
    </>
  )
}

export default Sale;

