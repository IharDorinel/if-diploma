import React, {useState} from 'react';
import cross from "./project_images/remove-icon.svg";
import maestro from "./project_images/maestro-logo.svg";
import visa from "./project_images/visa-logo.svg";
import arrow from "./project_images/arrowback.jfif";
import CartBagItem from "./CartBagContent";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import CartBagContent from "./CartBagContent";
import {proceedToCheckOut} from "./store/reducers/cartReducer";



const CartBag = () => {

  const [isVisible, setIsVisible] = useState(true);

  const [messageIsVisible, setMessageIsVisible] = useState(false);

  const [selectValue, setSelectValue] = useState(1);

  const [objectValue, setObjectValue] = useState({ids: 'quantity'});

  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.itemsInCart);


  const count = useSelector(state => state.cart.itemsInCart.map(item =>
    ({id: item.id,
      quantity: item.quantity,
  price: Number(item.price.value)})))

console.log(count)


  const cost = count.reduce((sum, item) => (+sum + (+item.price / 100) * item.quantity).toFixed(1), 0);


    const requestPOST = () => {

    const products = items.map(item => item.id).join(', ');


    const url = 'https://modnikky-api.herokuapp.com/api/cart';

    let data = new FormData();
    data.append("json", JSON.stringify(products))

    if(items.length > 0) {
      fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => setMessageIsVisible(true));

      setIsVisible(false);
      dispatch(proceedToCheckOut());
    }
  }

  return (
    <>
      {isVisible
        ? (
      <section className="bag__section">
        <NavLink to="/" className="bag__back">Home</NavLink>
        <span className="bag__title">BAG</span>
        <span className="bag__quantity, color_gray">{items.length} items</span>
        <hr/>

      <CartBagContent items={items} count={count} />

      <div className="bag__totalContainer">
        <p className="bag__total">Total USD $ {cost}</p>
        <button className="bag__button" onClick={requestPOST}>PROCEED TO CHECKOUT</button>

        <div className="bag__iconContainer">
          <img src={maestro} className="bag__icon" alt="maestro" />
          <img src={visa} className="bag__icon" alt="visa" />
        </div>
      </div>
      </section>)
        : null }
      {messageIsVisible
        ? (
          <>
            <NavLink to="/" className="bag__back">Back</NavLink>
            <h3 className="bag__message">Thank you for ordering, your items are on their way</h3>
          </>
        )
        : null
      }
      </>
  )
}

export default CartBag;

