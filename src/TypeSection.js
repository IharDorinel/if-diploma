import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

// images
import wishlist from "./project_images/wishlist-icon.svg";


const TypeSection = () => {

  const { type } = useParams();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`https://modnikky-api.herokuapp.com/api/catalog/${type}`)
      .then(res => res.json())
      .then(data => setCategory(data))
      .catch(err => console.err)
  }, [])

  const percent = 32;

  return (
    <>
      {/*<p>{category.type}</p>*/}
      {/*  <div className="saleContent__item">*/}
      {/*    <img src={category.images[0]} className="saleContent__image" alt={category.name} />*/}
      {/*    <img src={wishlist} className="saleContent__wishlist" alt="wishlist" />*/}
      {/*    <rectangle className="saleContent__rectangle">*/}
      {/*      <p className="saleContent__discount">-{percent}%</p>*/}
      {/*    </rectangle>*/}
      {/*    <span className="saleContent__price">$ {category.price.value}</span>*/}
      {/*    <span className="saleContent__perPrice">$ {category.price.value * (100 - percent) / 100}</span>*/}
      {/*  </div>*/}
    </>
  )
}

export default TypeSection;