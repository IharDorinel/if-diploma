import React from 'react';


// images
import cross from './project_images/remove-icon.svg';
import maestro from './project_images/maestro-logo.svg';
import visa from './project_images/visa-logo.svg';



const Bag = ({bagContent}) => {


  return (
    <>
      <section className="bag__section">
        <span className="bag__title">BAG</span>
        <span className="bag__quantity, color_gray">1 item</span>
        <hr/>

      {bagContent.map((item) => (
        <>
        <div className="bag__container">
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
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="bag__selectContainer">
                  <p className="bag__text">QUANTITY:</p>
                  <select className="bag__selectNumber">
                    <option value="1">{item.availableSizes.join('').split(',')[0].trim()}</option>
                    <option value="2">{item.availableSizes.join('').split(',')[1].trim()}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bag__removeContainer">
              <img src={cross} className="bag__cross" alt="cross" />
              <span className="bag__text">REMOVE</span>
            </div>

        </>
      ))
      }
        <hr/>

        <div className="bag__totalContainer">
          <p className="bag__total">Total USD $</p>
          <button className="bag__button">PROCEED TO CHECKOUT</button>

          <div className="bag__iconContainer">
            <img src={maestro} className="bag__icon" alt="maestro" />
            <img src={visa} className="bag__icon" alt="visa" />
          </div>
        </div>

      </section>
      </>)
      }

export default Bag;