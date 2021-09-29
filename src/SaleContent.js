import React from 'react';

const SaleContent = ({props}) => {
console.log(props)
  return (
    <>
      {props.map((elem) => (
        <div className="saleContent__item">
          <img src={elem.images[0]} className="saleContent__image" alt={elem.name} />
          <p>{elem.price.value} {elem.price.currency}</p>
        </div>
      ))}
    </>
  )
}

export default SaleContent;

