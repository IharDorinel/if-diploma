import React from 'react';

import SaleContentItem from "./SaleContentItem";
import Slider from "react-slick";
import wishlist from "./project_images/wishlist-icon.svg";
import {Link} from "react-router-dom";



const SaleContent = ({data, addToBag, setBagContent, setHeaderStyle}) => {

  return (
    <>
      {data.map((item) => (
       <SaleContentItem item={item} />
      ))
      }
    </>
  )
}

export default SaleContent;




