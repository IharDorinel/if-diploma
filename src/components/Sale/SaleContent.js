import React from 'react';

// components
import SaleContentItem from "./SaleContentItem";

const SaleContent = ({data, setItemFav}) => {

  return (
    <>
      {data.map((item) => (
       <SaleContentItem item={item} setItemFav={setItemFav} />
      ))
      }
    </>
  )
}

export default SaleContent;




