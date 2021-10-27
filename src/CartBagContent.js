import React from 'react';
import cross from "./project_images/remove-icon.svg";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "./store/reducers/cartReducer";
import CartBagItem from "./CartBagItem";

const CartBagContent = ({items, count}) => {

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteItemFromCart(id))
  }

  return (
    <>
      {items.map((item) => (
      <CartBagItem item={item} count={count} handleClick={handleClick}/>
        ))}
    </>
  )
}

export default CartBagContent;

