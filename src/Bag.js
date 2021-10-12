import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";


// images
import cross from './project_images/remove-icon.svg';
import maestro from './project_images/maestro-logo.svg';
import visa from './project_images/visa-logo.svg';


const Bag = ({bagContent}) => {

  const [isVisible, setIsVisible] = useState(true);

  const [messageIsVisible, setMessageIsVisible] = useState(false);

  const [selectValue, setSelectValue] = useState(0);


  const removeItem = () => {
    localStorage.clear()
  }

  const requestPOST = () => {

    const products = bagContent.map(item => item.id).join(', ');
    console.log(bagContent.map(item => item.id))
    console.log(products)


    const url = 'https://modnikky-api.herokuapp.com/api/cart';

    let data = new FormData();
    data.append("json", JSON.stringify(products))


      fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => setMessageIsVisible(true));


    setIsVisible(false);
    localStorage.clear();

  }

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  }

  const cost = bagContent.reduce((sum, item) => +sum + +item.price.value * selectValue, 0)



  return (
    <>
      {isVisible
        ? (
      <section className="bag__section">
        <NavLink to="/" className="bag__back">Back</NavLink>
        <span className="bag__title">BAG</span>
        <span className="bag__quantity, color_gray">{bagContent.length} items</span>
        <hr/>

      {bagContent.map((item) => (
        <>
        <div className="bag__container" key={item.id}>
              <img src={item.images[1]} className="bag__image" alt="bag" />
              <div className="bag__descrContainer">
                <p className="bag__itemName">{item.name}</p>
                <p className="bag__text">USD ${item.price.value}</p>
                <div className="bag__selectContainer">
                  <p className="bag__text">COLOR:</p>
                  <select>
                    <option value="item.color.name">{item.color.name}</option>
                  </select>
                </div>
                <div className="bag__selectContainer">
                  <p className="bag__text">SIZE:</p>
                  <select className="bag__selectNumber">
                    <option value="1">{item.availableSizes.join('').split(',')[0].trim()}</option>
                    <option value="2">{item.availableSizes.join('').split(',')[1].trim()}</option>
                  </select>
                </div>
                <div className="bag__selectContainer">
                  <p className="bag__text">QUANTITY:</p>
                  <select className="bag__selectNumber" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bag__removeContainer">
              <img src={cross} className="bag__cross" onClick={(e) => removeItem()} alt="cross" />
              <span className="bag__text">REMOVE</span>
            </div>
          <hr/>
        </>
      ))
      }

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

      )}

export default Bag;


