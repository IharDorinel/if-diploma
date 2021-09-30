import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

// import
import wishlist from './project_images/wishlist-icon.svg';


const ItemCard = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://modnikky-api.herokuapp.com/api/catalog/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])


  return (
    <>
      <img src={item.images[0]} alt="item.image"/>
      <img src={item.images[1]} alt="item.image"/>
      <p>{item.name}</p>
      <p>{item.price.currency} ${item.price.value}</p>
      <p>PRE-ORDER</p>
      <p>COLOR</p>
      <p>SIZE</p>
      <p>{item.availableSizes[0]}</p>

      <button>ADD TO BAG</button>
      <rectangle>
        <img src={wishlist} alt="wishlist" />
      </rectangle>

      <p>PRODUCT DESCRIPTION</p>
      <p>{item.description}</p>
      <p>SHIPPING & RETURNS</p>
      <p>FABRIC COMPOSITION</p>
    </>
  )
}

export default ItemCard;