import React from 'react';
import FavoritesContentItem from "./FavoritesContentItem";
import {deleteItemFromFav} from "./store/reducers/cartReducer";
import {useDispatch} from "react-redux";

const FavoritesContent = ({items}) => {

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteItemFromFav(id))
  }

  return (
    <>
      {items.map((item) => (
        <FavoritesContentItem item={item} handleClick={handleClick}/>
        ))}
    </>
  )
}

export default FavoritesContent;